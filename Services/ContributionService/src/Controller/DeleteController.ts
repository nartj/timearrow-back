import { Controller, Delete, Param, HttpError } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/contribution')
export class DeleteController extends AbstractController {

    @Delete('/:id')
    public async deleteContribution(@Param("id") id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let contribution = await this.contributionService.getContribution(id);
        contribution.setDeleted(true);
        await this.contributionRepository.saveContribution(contribution);
        throw new HttpError(204, '');
    }
}
