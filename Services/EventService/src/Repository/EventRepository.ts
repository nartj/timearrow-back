import { Event } from "../Entity/Event";
import { Service } from "typedi";
import {Connection, getConnection, getManager, Repository, FindManyOptions} from "typeorm";

@Service()
export class EventRepository {

    public entityManager: Repository<Event>;

    public connection: Connection;

    constructor () {
        this.entityManager = getManager().getRepository(Event);
        this.connection = getConnection();
        this.connection.close();
    }

    public async saveEvent(event: Event) {
        await this.connection.connect();
        let savedEvent: Event = await this.entityManager.save(event);
        await this.connection.close();

        return savedEvent;
    }

    public async findOne(param: any) {
        await this.connection.connect();
        let event: Event = await this.entityManager.findOne(param);
        await this.connection.close();

        return event;
    }

    public async find(options: any = {}) {
        await this.connection.connect();
        let events: Event[] = await this.entityManager.find(options);
        await this.connection.close();

        return events;
    }

    public async findAndCount(options?: FindManyOptions<Event>): Promise<Event[]> {
        await this.connection.connect();
        let events = await this.entityManager.find(options);
        await this.connection.close();

        return events;
    }
}
