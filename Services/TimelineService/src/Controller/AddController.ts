import { Controller, Body, Post } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/timeline')
export class AddController extends AbstractController {

    @Post()
    public async addTimeline(@Body() timelineData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let newTimeline = this.timelineService.createTimeline(timelineData);
        return await this.timelineRepository.saveTimeline(newTimeline);
    }
}
