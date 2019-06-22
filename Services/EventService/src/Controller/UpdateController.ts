import { Controller, Body, Put, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/event')
export class UpdateController extends AbstractController {

    @Put('/:id')
    public async updateEvent(@Param("id") id: number, @Body() eventData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let event = await this.eventService.getEvent(id);
        this.eventService.updateEvent(eventData, event);
        return await this.eventRepository.saveEvent(event);
    }
}
