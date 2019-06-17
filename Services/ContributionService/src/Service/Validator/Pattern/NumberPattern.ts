import { Pattern } from './Pattern';

export class NumberPattern extends Pattern {
    constructor (min: number = undefined, max: number = undefined) {
        super(
            /^[0-9]*$/,
            min,
            max,
            'any number'
        )
    }
}
