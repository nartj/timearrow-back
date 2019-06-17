import { Pattern } from './Pattern';

export class StringPattern extends Pattern {
    constructor (min: number = undefined, max: number = undefined) {
        super(
            /^.*$/,
            min,
            max,
            'any text'
        )
    }
}
