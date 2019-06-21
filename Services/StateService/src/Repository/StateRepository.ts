import { State } from "../Entity/State";
import { Service } from "typedi";
import { Connection, getConnection, getManager, Repository, FindManyOptions } from "typeorm";

@Service()
export class StateRepository {

    public entityManager: Repository<State>;

    public connection: Connection;

    constructor () {
        this.entityManager = getManager().getRepository(State);
        this.connection = getConnection();
        this.connection.close();
    }

    public async saveState(state: State) {
        await this.connection.connect();
        let savedState: State = await this.entityManager.save(state);
        await this.connection.close();

        return savedState;
    }

    public async findOne(param: any) {
        await this.connection.connect();
        let state: State = await this.entityManager.findOne(param);
        await this.connection.close();

        return state;
    }

    public async find() {
        await this.connection.connect();
        let states: State[] = await this.entityManager.find();
        await this.connection.close();

        return states;
    }

    public async findAndCount(options?: FindManyOptions<State>): Promise<State[]> {
        await this.connection.connect();
        let states = await this.entityManager.find(options);
        await this.connection.close();

        return states;
    }
}
