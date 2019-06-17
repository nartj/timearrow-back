import { StateService } from '../Service/StateService';
import { StateRepository } from '../Repository/StateRepository';
import { Inject } from "typedi";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { RoleService } from "../Service/RoleService";

export abstract class AbstractController {

    @Inject()
    protected stateService: StateService;

    @Inject()
    protected stateRepository: StateRepository;

    @Inject()
    protected roleService: RoleService;

    @Inject()
    protected authenticatedUserAware: AuthenticatedUserAware;
}
