import {Inject, Service} from "typedi";
import {User} from "../Entity/User";
import * as ejs from 'ejs';
import * as nodemailer from 'nodemailer';
import {readFileSync} from "fs";
import {HttpError} from "routing-controllers";
import {UserService} from "./UserService";

@Service()
export class MailingService {

    @Inject()
    private userService: UserService;

    sendResetPasswordMail(user: User) {
        let mailOptions = {
            to: user.getEmail(),
            subject: 'Password reset request',
            html: ejs.render(
                readFileSync(`${__dirname}/../Views/PasswordRequestEmail.ejs`).toString(),
                {
                    username: user.getFirstName(),
                    resetLink: this.userService.getResetLink(user),
                }
            )
        };

        let transporter = nodemailer.createTransport(
            {
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                        user: process.env.SENDER_EMAIL,
                        pass: process.env.SENDER_PASSWORD
                    }
            });

        transporter.sendMail(mailOptions, (error: Error, info: any) => {
            if (error) {
                console.log(error.message);
                throw new HttpError(500, error.message);
            }
        });
    }
}
