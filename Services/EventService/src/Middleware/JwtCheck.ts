import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import * as jwt from "jsonwebtoken";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { Inject } from "typedi";
import * as bcrypt from 'bcryptjs';
import axios from 'axios';
import {EventRepository} from "../Repository/EventRepository";

@Middleware({ type: 'before' })
export class JwtHandlerMiddleware implements ExpressMiddlewareInterface {

    @Inject()
    private  authenticatedUserAware: AuthenticatedUserAware;

    @Inject()
    private userRepository: EventRepository;

    async use(req: any, res: any, next: (err?: any) => any): Promise<any> {

        try {
            const token = <string>req.headers['authorization'].replace(/^Bearer\s/, '');
            let jwtPayload;

            try {
                jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET);
                res.locals.jwtPayload = jwtPayload;
            } catch (error) {
                console.log(error);
                res.status(401).send();
                return;
            }

            const {userId, email} = jwtPayload;
            const newToken = jwt.sign({userId, email}, process.env.JWT_SECRET, {
                expiresIn: "1h"
            });
            res.setHeader("token", newToken);

            try {
                let user: any = await  axios.get(process.env.GET_USER_URI + userId, {
                    headers: {
                        microservicesecret: await bcrypt.hash(process.env.APP_SECRET, 10)
                    }
                });
                this.authenticatedUserAware.setAuthenticatedUser(user.data);
            } catch (e) {
                console.log(e);
                res.status(401).send();
            }

            next();
        } catch (e) {
            console.log(e);
            res.status(401).send();
        }
    }

}

