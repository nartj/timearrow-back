import {AbstractController} from "./AbstractController";
import {Body, Controller, HttpError, Post} from "routing-controllers";
import {RoleService} from "../Service/RoleService";

@Controller('/password')
export class PasswordController extends AbstractController {

    @Post('/forgot-password')
    public async forgotPassword(@Body() userData: any) {

        let user = await this.userService.getUserByEmail(userData.email);

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.ANONYMOUS);

        let token = this.tokenGenerator.generateToken();
        user.setConfirmationToken(token);
        user.setPasswordRequestedAt(new Date());
        await this.userRepository.saveUser(user);

        this.mailingService.sendResetPasswordMail(user);

        throw new HttpError(200, 'Email with reset password link was sent');

    }

    @Post('/reset-password')
    public async resetPassword(@Body() userData: any) {
        await this.userService.resetPassword(userData);
        throw new HttpError(200, 'Password was changed successfully');
    }
}
