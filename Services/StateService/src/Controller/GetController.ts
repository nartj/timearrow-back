import { Controller, Get, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/state')
export class GetController extends AbstractController {

    @Get('/:id')
    public async getState(@Param('id') id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.stateService.getState(id);
    }

    @Get()
    public async getStates() {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.stateService.getStates();
    }
}
