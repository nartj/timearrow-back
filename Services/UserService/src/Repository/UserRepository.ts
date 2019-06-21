import { User } from "../Entity/User";
import { Service } from "typedi";
import {Connection, FindManyOptions, getConnection, getManager, Repository} from "typeorm";

@Service()
export class UserRepository {

    public entityManager: Repository<User>;

    public connection: Connection;

    constructor () {
        this.entityManager = getManager().getRepository(User);
        this.connection = getConnection();
        this.connection.close();
    }

    public async saveUser(user: User) {
        await this.connection.connect();
        let savedUser: User = await this.entityManager.save(user);
        await this.connection.close();

        return savedUser;
    }

    public async findOne(param: any) {
        await this.connection.connect();
        let user: User = await this.entityManager.findOne(param);
        await this.connection.close();

        return user;
    }

    public async find() {
        await this.connection.connect();
        let users: User[] = await this.entityManager.find();
        await this.connection.close();

        return users;
    }

    public async findAndCount(options?: FindManyOptions<User>): Promise<User[]> {
        await this.connection.connect();
        let users = await this.entityManager.find(options);
        await this.connection.close();

        return users;
    }
}
