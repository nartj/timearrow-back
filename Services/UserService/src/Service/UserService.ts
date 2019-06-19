import { User } from '../Entity/User';
import { UserValidator } from './Validator/UserValidator';
import { HttpError } from "routing-controllers";
import { Inject, Service } from "typedi";
import * as bcrypt from 'bcryptjs';
import {RoleService} from "./RoleService";
import {UserRepository} from "../Repository/UserRepository";

@Service()
export class UserService {

    @Inject()
    private userValidator: UserValidator;

    @Inject()
    private userRepository: UserRepository;

    public async createUser(userData: any): Promise<User> {

        this.userValidator.validateCreateData(userData);

        try {
            await this.getUserByEmail(userData.email);
        } catch (e) {
            let hash = bcrypt.hashSync(userData.password, 10);

            return (new User())
                .setBirthDate(userData.birthDate)
                .setFirstName(userData.firstName)
                .setGdprConfirmed(userData.gdprConfirmed)
                .setLastName(userData.lastName)
                .setEmail(userData.email)
                .setPassword(hash)
                .setRoles([RoleService.ANONYMOUS, RoleService.USER])
                .setContributions(userData.contributions);
        }
        throw new HttpError(400, 'Email already exists');
    }

    public updateUser(userData: any, user: User) {
        this.userValidator.validateUpdateData(userData);

        if (userData.birthDate) {
            user.setBirthDate(userData.birthDate);
        }

        if (userData.firstName) {
            user.setFirstName(userData.firstName);
        }

        if (typeof userData.gdprConfirmed === 'boolean') {
            user.setGdprConfirmed(userData.gdprConfirmed);
        }

        if (userData.lastName) {
            user.setLastName(userData.lastName);
        }

        if (userData.email) {
            user.setEmail(userData.email);
        }

        if (userData.contributions) {
            user.setContributions(userData.contributions);
        }
    }

    public async getUser(id: number): Promise<User> {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('AbstractMembership id is invalid');
        }

        let user = await this.userRepository.findOne({id: id, deleted: false});

        if (user === undefined) {
            throw new HttpError(404, 'user not found');
        }

        return user;
    }

    public async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    public async getUserByEmail(email: string) {
        if (!email || email === '') {
            throw new HttpError(400, 'Missing email');
        }

        let user = await this.userRepository.findOne({email: email});

        if (user === undefined) {
            throw new HttpError(404, 'Email is unknown');
        }

        if (user.isDeleted()) {
            throw new HttpError(404, `User with given email ${email} not found`);
        }

        return user;
    }

    public async resetPassword(userData: any) {
        this.userValidator.validateResetPasswordData(userData);

        let user = await this.getUserByResetPasswordToken(userData.token);

        let hash = bcrypt.hashSync(userData.password, 10);

        user.setPasswordRequestedAt(null);
        user.setConfirmationToken(null);
        user.setPassword(hash);

        await this.userRepository.saveUser(user);
    }

    public async getUserByResetPasswordToken(token: string) {

        if (!token || token === '') {
            throw new HttpError(400, 'Missing token');
        }

        let user = await this.userRepository.findOne({email: token});

        if (user === undefined || user.isDeleted()) {
            throw new HttpError(404, 'user not found');
        }

        return user;
    }

    public getResetLink(user: User) {
        let webAppUrl = process.env.WEB_APP_URL;
        let resetPasswordLink = process.env.WEB_APP_RESET_PASSWORD_LINK;

        return webAppUrl.trim() + '/' + resetPasswordLink.trim() + '/' + user.getConfirmationToken();
    }
}
