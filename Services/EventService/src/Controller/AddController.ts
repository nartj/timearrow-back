import { Controller, Body, Post } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/event')
export class AddController extends AbstractController {

    @Post()
    public async addEvent(@Body() eventData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let newEvent = this.eventService.createEvent(eventData);
        return await this.eventRepository.saveEvent(newEvent);
    }
}
