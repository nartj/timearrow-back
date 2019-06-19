import { Controller, Get, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/timeline')
export class GetController extends AbstractController {

    @Get('/:id')
    public async getTimeline(@Param('id') id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.timelineService.getTimeline(id);
    }

    @Get()
    public async getTimelines() {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.timelineService.getTimelines();
    }
}
