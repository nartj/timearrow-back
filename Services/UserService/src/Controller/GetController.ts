import {Controller, Get, Param, QueryParam} from 'routing-controllers';
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
    public async getUsers(@QueryParam('from') from: number, @QueryParam('size') size: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.userService.getUsers(from, size);
    }
}
