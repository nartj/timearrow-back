import { Controller, Body, Put, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/contribution')
export class UpdateController extends AbstractController {

    @Put('/:id')
    public async updateContribution(@Param("id") id: number, @Body() contributionData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let contribution = await this.contributionService.getContribution(id);
        this.contributionService.updateContribution(contributionData, contribution);
        return await this.contributionRepository.saveContribution(contribution);
    }
}
