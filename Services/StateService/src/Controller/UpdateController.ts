import { Controller, Body, Put, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/state')
export class UpdateController extends AbstractController {

    @Put('/:id')
    public async updateState(@Param("id") id: number, @Body() stateData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let state = await this.stateService.getState(id);
        this.stateService.updateState(stateData, state);
        return await this.stateRepository.saveState(state);
    }
}
