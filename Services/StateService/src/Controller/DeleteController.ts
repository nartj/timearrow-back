import { Controller, Delete, Param, HttpError } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/state')
export class DeleteController extends AbstractController {

    @Delete('/:id')
    public async deleteState(@Param("id") id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let state = await this.stateService.getState(id);
        state.setDeleted(true);
        await this.stateRepository.saveState(state);
        throw new HttpError(204, '');
    }
}
