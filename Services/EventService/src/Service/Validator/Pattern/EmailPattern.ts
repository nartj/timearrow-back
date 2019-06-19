import { Pattern } from './Pattern';

export class EmailPattern extends Pattern {
    constructor () {
        super(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            undefined,
            undefined,
            'your.email@example.com'
        )
    }
}
