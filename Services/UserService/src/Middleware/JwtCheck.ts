import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import * as jwt from "jsonwebtoken";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { Inject } from "typedi";
import {User} from "../Entity/User";
import { RoleService } from "../Service/RoleService";
import * as bcrypt from 'bcryptjs';
import {UserRepository} from "../Repository/UserRepository";


@Middleware({ type: 'before' })
export class JwtHandlerMiddleware implements ExpressMiddlewareInterface {

    @Inject()
    private  authenticatedUserAware: AuthenticatedUserAware;

    @Inject()
    private userRepository: UserRepository;

    async use(req: any, res: any, next: (err?: any) => any): Promise<any> {

        if (process.env.EXCLUDED_JWT_RESOURCES[req.originalUrl]) {
            if (process.env.EXCLUDED_JWT_RESOURCES[req.originalUrl].includes(req.method)) {
                next();
                return;
            }
        }

        if (!req.headers['authorization'] && !req.headers['microservicesecret'])
            res.status(401).send();

        // Bypass security for inner services calls
        if (req.headers['microservicesecret'] && await bcrypt.compare(process.env.APP_SECRET, <string>req.headers['microservicesecret'])) {
            this.authenticatedUserAware.setAuthenticatedUser(new User().setRoles([RoleService.ADMIN]));
            next();
            return;
        }

        const token = <string>req.headers['authorization'].replace(/^Bearer\s/, '');
        let jwtPayload;

        try {
            jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET);
            res.locals.jwtPayload = jwtPayload;
        } catch (error) {
            res.status(401).send();
            return;
        }

        const {userId, email} = jwtPayload;
        const newToken = jwt.sign({userId, email}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        res.setHeader("token", newToken);

        try {
            let user: User = await this.userRepository.findOne({id: userId, deleted: false});
            this.authenticatedUserAware.setAuthenticatedUser(user);
        } catch (e) {
            res.status(401).send();
        }

        next();
    }

}

