import { Controller, Get, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import {RoleService} from "../Service/RoleService";

@Controller('/user')
export class GetController extends AbstractController {

    @Get('/:id')
    public async getUser(@Param('id') id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER, id);

        return await this.userService.getUser(id);
    }

    @Get()
    public async getUsers() {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.ADMIN);

        return await this.userService.getUsers();
    }
}
