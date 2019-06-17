import { ContributionService } from '../Service/ContributionService';
import { ContributionRepository } from '../Repository/ContributionRepository';
import { Inject } from "typedi";
import { AuthenticatedUserAware } from "../Authentication/AuthenticatedUserAware";
import { RoleService } from "../Service/RoleService";

export abstract class AbstractController {

    @Inject()
    protected contributionService: ContributionService;

    @Inject()
    protected contributionRepository: ContributionRepository;

    @Inject()
    protected roleService: RoleService;

    @Inject()
    protected authenticatedUserAware: AuthenticatedUserAware;
}
