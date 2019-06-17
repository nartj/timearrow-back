import { Controller, Body, Put, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/timeline')
export class UpdateController extends AbstractController {

    @Put('/:id')
    public async updateTimeline(@Param("id") id: number, @Body() timelineData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let timeline = await this.timelineService.getTimeline(id);
        this.timelineService.updateTimeline(timelineData, timeline);
        return await this.timelineRepository.saveTimeline(timeline);
    }
}
