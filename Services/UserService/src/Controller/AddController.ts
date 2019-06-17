import { Controller, Body, Post } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/user')
export class AddController extends AbstractController {

    @Post()
    public async addUser(@Body() userData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.ANONYMOUS);

        let newUser = await this.userService.createUser(userData);
        return await this.userRepository.saveUser(newUser);
    }
}
