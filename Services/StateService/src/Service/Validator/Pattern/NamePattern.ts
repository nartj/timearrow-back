import { Pattern } from "./Pattern";

export class NamePattern extends Pattern {
    constructor () {
        super(
            /^[\p{L}\- ]+$/u,
            1,
            50,
            'any letters, -(dash) and space'
        )
    }
}
