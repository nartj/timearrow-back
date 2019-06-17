import { Controller, Body, Post } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/contribution')
export class AddController extends AbstractController {

    @Post()
    public async addContribution(@Body() contributionData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let newContribution = this.contributionService.createContribution(contributionData);
        return await this.contributionRepository.saveContribution(newContribution);
    }
}
