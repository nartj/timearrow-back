import { TimelineService } from '../Service/TimelineService';
import { TimelineRepository } from '../Repository/TimelineRepository';
import { Inject } from "typedi";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { RoleService } from "../Service/RoleService";

export abstract class AbstractController {

    @Inject()
    protected timelineService: TimelineService;

    @Inject()
    protected timelineRepository: TimelineRepository;

    @Inject()
    protected roleService: RoleService;

    @Inject()
    protected authenticatedUserAware: AuthenticatedUserAware;
}
