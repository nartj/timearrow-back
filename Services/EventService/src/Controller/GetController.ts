import { Controller, Get, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/event')
export class GetController extends AbstractController {

    @Get('/:id')
    public async getEvent(@Param('id') id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.eventService.getEvent(id);
    }

    @Get()
    public async getEvents() {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.eventService.getEvents();
    }
}
