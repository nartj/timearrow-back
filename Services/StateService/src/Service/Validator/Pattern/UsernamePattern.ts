import { Pattern } from './Pattern';

export class UsernamePattern extends Pattern {
    constructor () {
        super(
            /^[a-z0-9-]+$/,
            1,
            50,
            'letters a-z, digits 0-9 and -(dash)'
        )
    }
}
