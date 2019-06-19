import { Controller, Delete, Param, HttpError } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/event')
export class DeleteController extends AbstractController {

    @Delete('/:id')
    public async deleteEvent(@Param("id") id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let event = await this.eventService.getEvent(id);
        event.setDeleted(true);
        await this.eventRepository.saveEvent(event);
        throw new HttpError(204, '');
    }
}
