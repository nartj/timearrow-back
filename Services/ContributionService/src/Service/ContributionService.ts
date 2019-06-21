import { Contribution } from '../Entity/Contribution';
import { ContributionValidator } from './Validator/ContributionValidator';
import { HttpError } from "routing-controllers";
import { Inject, Service } from "typedi";
import {ContributionRepository} from "../Repository/ContributionRepository";

@Service()
export class ContributionService {

    @Inject()
    private contributionValidator: ContributionValidator;

    @Inject()
    private contributionRepository: ContributionRepository;

    public createContribution(contributionData: any): Contribution {

        this.contributionValidator.validateCreateData(contributionData);

        return (new Contribution())
            .setState(contributionData.state)
            .setTimeline(contributionData.timeline)
            .setEvent(contributionData.event)
            .setUser(contributionData.user)
            .setDate(contributionData.date);
    }

    public updateContribution(contributionData: any, contribution: Contribution) {
        this.contributionValidator.validateUpdateData(contributionData);

        if (contributionData.state) {
            contribution.setState(contributionData.state);
        }

        if (contributionData.timeline) {
            contribution.setTimeline(contributionData.timeline);
        }

        if (contributionData.event) {
            contribution.setEvent(contributionData.event);
        }

        if (contributionData.user) {
            contribution.setUser(contributionData.user);
        }

        if (contributionData.date) {
            contribution.setDate(contributionData.date);
        }
    }

    public async getContribution(id: number): Promise<Contribution> {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('contribution id is invalid');
        }

        let contribution = await this.contributionRepository.findOne({id: id, deleted: false});

        if (contribution === undefined) {
            throw new HttpError(404, 'contribution not found');
        }

        return contribution;
    }

    public async getContributions(from: number, size: number): Promise<Contribution[]> {
        if (from && size)
            return this.paginate(from, size);

        return await this.contributionRepository.find();
    }

    public async paginate(from: number, size: number): Promise<Contribution[]> {
        return await this.contributionRepository.findAndCount({
            take: size,
            skip: from,
        });
    }
}
