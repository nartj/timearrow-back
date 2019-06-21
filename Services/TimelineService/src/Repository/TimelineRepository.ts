import { Timeline } from "../Entity/Timeline";
import { Service } from "typedi";
import { Connection, getConnection, getManager, Repository, FindManyOptions } from "typeorm";


@Service()
export class TimelineRepository {

    public entityManager: Repository<Timeline>;

    public connection: Connection;

    constructor () {
        this.entityManager = getManager().getRepository(Timeline);
        this.connection = getConnection();
        this.connection.close();
    }

    public async saveTimeline(timeline: Timeline) {
        await this.connection.connect();
        let savedTimeline: Timeline = await this.entityManager.save(timeline);
        await this.connection.close();

        return savedTimeline;
    }

    public async findOne(param: any) {
        await this.connection.connect();
        let timeline: Timeline = await this.entityManager.findOne(param);
        await this.connection.close();

        return timeline;
    }

    public async find() {
        await this.connection.connect();
        let timelines: Timeline[] = await this.entityManager.find();
        await this.connection.close();

        return timelines;
    }

    public async findAndCount(options?: FindManyOptions<Timeline>): Promise<Timeline[]> {
        await this.connection.connect();
        let timelines = await this.entityManager.find(options);
        await this.connection.close();

        return timelines;
    }
}
