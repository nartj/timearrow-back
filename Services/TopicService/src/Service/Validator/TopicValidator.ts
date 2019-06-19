import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { StringPattern } from './Pattern/StringPattern';
import { NumberPattern } from './Pattern/NumberPattern';
import { ArrayPattern } from "./Pattern/ArrayPattern";
import { Service } from "typedi";

@Service()
export class TopicValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('code', new StringPattern(), true, 'code'),
            new DefaultValidatorType('libelle', new StringPattern(), true, 'libelle'),
            new DefaultValidatorType('badge', new StringPattern(), true, 'badge'),
            new DefaultValidatorType('timelines', new ArrayPattern(), true, 'timelines'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('code', new StringPattern(), false, 'code'),
            new DefaultValidatorType('libelle', new StringPattern(), false, 'libelle'),
            new DefaultValidatorType('badge', new StringPattern(), false, 'badge'),
            new DefaultValidatorType('timelines', new ArrayPattern(), false, 'timelines'),
        ]);
    }
}
