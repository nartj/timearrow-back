import { Controller, Get, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/topic')
export class GetController extends AbstractController {

    @Get('/:id')
    public async getTopic(@Param('id') id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.topicService.getTopic(id);
    }

    @Get()
    public async getTopics() {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.topicService.getTopics();
    }
}
