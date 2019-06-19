import { TopicService } from '../Service/TopicService';
import { TopicRepository } from '../Repository/TopicRepository';
import { Inject } from "typedi";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { RoleService } from "../Service/RoleService";

export abstract class AbstractController {

    @Inject()
    protected topicService: TopicService;

    @Inject()
    protected topicRepository: TopicRepository;

    @Inject()
    protected roleService: RoleService;

    @Inject()
    protected authenticatedUserAware: AuthenticatedUserAware;
}
