import { Pattern } from './Pattern';

export class ArrayPattern extends Pattern{
    constructor () {
        super(
            /^\[(\ ?\"?.?\"?\d?\ ?\,\ ?\"?.?\"?\d?\ ?)*\ ?\]$/,
            undefined,
            undefined,
            'Javascript formated array needed'
        )
    }
}
