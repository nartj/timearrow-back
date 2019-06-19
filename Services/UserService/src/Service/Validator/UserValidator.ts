import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { NamePattern } from './Pattern/NamePattern';
import { UsernamePattern } from './Pattern/UsernamePattern';
import { StringPattern } from './Pattern/StringPattern';
import { EmailPattern } from './Pattern/EmailPattern';
import { PhonePattern } from './Pattern/PhonePattern';
import { DateOrEmptyStringPattern } from './Pattern/DateOrEmptyStringPattern';
import { ArrayPattern } from "./Pattern/ArrayPattern";
import { Service } from "typedi";

@Service()
export class UserValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('username', new UsernamePattern(), true),
            new DefaultValidatorType('password', new StringPattern(4, 255), true),
            new DefaultValidatorType('firstName', new NamePattern(), true, 'name'),
            new DefaultValidatorType('lastName', new NamePattern(), true, 'surname'),
            new DefaultValidatorType('email', new EmailPattern(), true),
            new DefaultValidatorType('phoneNumber', new PhonePattern(), false, 'phone number'),
            new DefaultValidatorType('birthDate', new DateOrEmptyStringPattern(), false, 'birth date'),
            new DefaultValidatorType('contributions', new ArrayPattern(), false, 'contributions'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('username', new UsernamePattern(), false),
            new DefaultValidatorType('password', new StringPattern(4, 255), false),
            new DefaultValidatorType('firstName', new NamePattern(), false, 'name'),
            new DefaultValidatorType('lastName', new NamePattern(), false, 'surname'),
            new DefaultValidatorType('email', new EmailPattern(), false),
            new DefaultValidatorType('phoneNumber', new PhonePattern(), false, 'phone number'),
            new DefaultValidatorType('birthDate', new DateOrEmptyStringPattern(), false, 'birth date'),
            new DefaultValidatorType('contributions', new ArrayPattern(), false, 'contributions'),
        ]);
    }

    validateResetPasswordData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('token', new StringPattern(32), true),
            new DefaultValidatorType('password', new StringPattern(4, 255), true),
        ]);
    }
}
