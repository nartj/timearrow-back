import { State } from '../Entity/State';
import { StateValidator } from './Validator/StateValidator';
import { HttpError } from "routing-controllers";
import { Inject, Service } from "typedi";
import {StateRepository} from "../Repository/StateRepository";

@Service()
export class StateService {

    @Inject()
    private stateValidator: StateValidator;

    @Inject()
    private stateRepository: StateRepository;

    public createState(stateData: any): State {

        this.stateValidator.validateCreateData(stateData);

        return (new State())
            .setCode(stateData.code)
            .setLibelle(stateData.libelle)
            .setContribution(stateData.contribution);
    }

    public updateState(stateData: any, state: State) {
        this.stateValidator.validateUpdateData(stateData);

        if (stateData.code) {
            state.setCode(stateData.code);
        }

        if (stateData.libelle) {
            state.setLibelle(stateData.libelle);
        }

        if (stateData.contribution) {
            state.setContribution(stateData.contribution);
        }
    }

    public async getState(id: number): Promise<State> {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('state id is invalid');
        }

        let state = await this.stateRepository.findOne({id: id, deleted: false});

        if (state === undefined) {
            throw new HttpError(404, 'state not found');
        }

        return state;
    }

    public async getStates(): Promise<State[]> {
        return await this.stateRepository.find();
    }
}
