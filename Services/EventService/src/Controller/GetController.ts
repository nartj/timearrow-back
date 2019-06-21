import { Controller, Get, Param, QueryParam } from 'routing-controllers';
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
    public async getEvents(@QueryParam('from') from: number, @QueryParam('size') size: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        return await this.eventService.getEvents(from, size);
    }
}
