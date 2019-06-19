import { Topic } from "../Entity/Topic";
import { Service } from "typedi";
import {Connection, getConnection, getManager, Repository} from "typeorm";

@Service()
export class TopicRepository {

    public entityManager: Repository<Topic>;

    public connection: Connection;

    constructor () {
        this.entityManager = getManager().getRepository(Topic);
        this.connection = getConnection();
        this.connection.close();
    }

    public async saveTopic(topic: Topic) {
        await this.connection.connect();
        let savedTopic: Topic = await this.entityManager.save(topic);
        await this.connection.close();

        return savedTopic;
    }

    public async findOne(param: any) {
        await this.connection.connect();
        let topic: Topic = await this.entityManager.findOne(param);
        await this.connection.close();

        return topic;
    }

    public async find() {
        await this.connection.connect();
        let topics: Topic[] = await this.entityManager.find();
        await this.connection.close();

        return topics;
    }
}
