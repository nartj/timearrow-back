import { Controller, Get, Param, QueryParam } from 'routing-controllers';
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
    public async getContributions(@QueryParam('from') from: number, @QueryParam('size') size: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.contributionService.getContributions(from, size);
    }
}
