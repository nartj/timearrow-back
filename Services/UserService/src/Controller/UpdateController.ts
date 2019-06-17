import { Controller, Body, Put, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/user')
export class UpdateController extends AbstractController {

    @Put('/:id')
    public async updateUser(@Param("id") id: number, @Body() userData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER, id);

        let user = await this.userService.getUser(id);
        this.userService.updateUser(userData, user);
        return await this.userRepository.saveUser(user);
    }
}
