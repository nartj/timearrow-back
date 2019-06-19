import { EventService } from '../Service/EventService';
import { EventRepository } from '../Repository/EventRepository';
import { Inject } from "typedi";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { RoleService } from "../Service/RoleService";

export abstract class AbstractController {

    @Inject()
    protected eventService: EventService;

    @Inject()
    protected eventRepository: EventRepository;

    @Inject()
    protected roleService: RoleService;

    @Inject()
    protected authenticatedUserAware: AuthenticatedUserAware;
}
