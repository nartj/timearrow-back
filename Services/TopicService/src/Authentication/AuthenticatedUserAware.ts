export class AuthenticatedUserAware {

    private authenticatedUser: any;

    getAuthenticatedUser(): any {
        return this.authenticatedUser;
    }

    setAuthenticatedUser(value: any): this {
        this.authenticatedUser = value;
        return this;
    }
}
