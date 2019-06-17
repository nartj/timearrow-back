import { Controller, Delete, Param, HttpError } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import {RoleService} from "../Service/RoleService";

@Controller('/user')
export class DeleteController extends AbstractController {

    @Delete('/:id')
    public async deleteUser(@Param("id") id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER, id);

        let user = await this.userService.getUser(id);
        user.setDeleted(true);
        await this.userRepository.saveUser(user);
        throw new HttpError(204, '');
    }
}
