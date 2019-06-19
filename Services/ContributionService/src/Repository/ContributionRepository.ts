import { Contribution } from "../Entity/Contribution";
import { Service } from "typedi";
import {Connection, getConnection, getManager, Repository} from "typeorm";

@Service()
export class ContributionRepository {

    public entityManager: Repository<Contribution>;

    public connection: Connection;

    constructor () {
        this.entityManager = getManager().getRepository(Contribution);
        this.connection = getConnection();
        this.connection.close();
    }

    public async saveContribution(contribution: Contribution) {
        await this.connection.connect();
        let savedContribution: Contribution = await this.entityManager.save(contribution);
        await this.connection.close();

        return savedContribution;
    }

    public async findOne(param: any) {
        await this.connection.connect();
        let contribution: Contribution = await this.entityManager.findOne(param);
        await this.connection.close();

        return contribution;
    }

    public async find() {
        await this.connection.connect();
        let contributions: Contribution[] = await this.entityManager.find();
        await this.connection.close();

        return contributions;
    }
}
