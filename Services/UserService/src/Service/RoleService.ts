import { User } from "../Entity/User";
import {HttpError} from "routing-controllers";

export class RoleService {
    static ANONYMOUS: string = 'ROLE_ANONYMOUS';
    static USER: string = 'ROLE_USER';
    static ADMIN: string = 'ROLE_ADMIN';

    public check(user: User, role: string, id: number = null) {
        if (role === RoleService.ANONYMOUS || user.getRoles().includes(RoleService.ADMIN))
            return;

        if (!user.getRoles().includes(role))
            throw new HttpError(401, 'You are not authorized to access this resource');

        if (id && user.getId() !== id)
            throw new HttpError(401, 'You are not authorized to access this resource');
    }
}
