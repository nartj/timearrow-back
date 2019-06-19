import { Pattern } from './Pattern';

export class DateOrEmptyStringPattern extends Pattern{
    constructor () {
        super(
            /^$|^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
            0,
            undefined,
            'Date in format YYYY-MM-DD, eg.' + new Date('Y-12-31') + ' or empty string'
        )
    }
}
