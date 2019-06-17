import { User } from "../Entity/User";

export class AuthenticatedUserAware {

    private authenticatedUser: User;

    getAuthenticatedUser(): User {
        return this.authenticatedUser;
    }

    setAuthenticatedUser(value: User): this {
        this.authenticatedUser = value;
        return this;
    }
}
