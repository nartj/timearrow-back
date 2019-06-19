import { Pattern } from './Pattern';

export class PhonePattern extends Pattern {
    constructor (min: number = 0, max: number = 30) {
        super(
            /^[0-9+\- ]*$/,
            min,
            max,
            'digits [0-9], -(minus), +(plus) and space'
        )
    }
}
