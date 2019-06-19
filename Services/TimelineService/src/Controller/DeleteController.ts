import { Controller, Delete, Param, HttpError } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/timeline')
export class DeleteController extends AbstractController {

    @Delete('/:id')
    public async deleteTimeline(@Param("id") id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let timeline = await this.timelineService.getTimeline(id);
        timeline.setDeleted(true);
        await this.timelineRepository.saveTimeline(timeline);
        throw new HttpError(204, '');
    }
}
