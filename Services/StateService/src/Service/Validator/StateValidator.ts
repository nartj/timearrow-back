import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { StringPattern } from './Pattern/StringPattern';
import { NumberPattern } from './Pattern/NumberPattern';
import { Service } from "typedi";

@Service()
export class StateValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('code', new NumberPattern(), true, 'code'),
            new DefaultValidatorType('libelle', new StringPattern(), true, 'libelle'),
            new DefaultValidatorType('contribution', new NumberPattern(), true, 'contribution'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('code', new NumberPattern(), false, 'code'),
            new DefaultValidatorType('libelle', new StringPattern(), false, 'libelle'),
            new DefaultValidatorType('contribution', new NumberPattern(), false, 'contribution'),
        ]);
    }
}
