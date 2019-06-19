import { Controller, Body, Post } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/state')
export class AddController extends AbstractController {

    @Post()
    public async addState(@Body() stateData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let newState = this.stateService.createState(stateData);
        return await this.stateRepository.saveState(newState);
    }
}
