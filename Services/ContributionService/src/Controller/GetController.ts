import { Controller, Get, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/contribution')
export class GetController extends AbstractController {

    @Get('/:id')
    public async getContribution(@Param('id') id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.contributionService.getContribution(id);
    }

    @Get()
    public async getContributions() {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.contributionService.getContributions();
    }
}
