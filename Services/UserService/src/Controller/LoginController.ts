import {AbstractController} from "./AbstractController";
import {Body, Controller, HttpError, Post} from "routing-controllers";
import {User} from "../Entity/User";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Controller('/login')
export class LoginController extends AbstractController {

    @Post('')
    public async login(@Body() loginData: any) {

        let { email, password } = loginData;

        if (!(email && password)) {
            throw new HttpError(400, 'Invalid credentials');
        }

        let user: User = await this.userService.getUserByEmail(email);

        if (await !bcrypt.compare(password, user.getPassword())) {
            throw new HttpError(400, 'Invalid credentials');
        }

        return jwt.sign(
            { userId: user.getId(), username: user.getEmail() },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
    }
}
