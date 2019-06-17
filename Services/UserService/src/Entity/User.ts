import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { DeleteAwareMixin } from "./Mixin/DeleteAwareMixin";

@Entity()
export class User extends DeleteAwareMixin {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({
        type: 'varchar',
        length: 50,
        default: null
    })
    private firstName: string;

    @Column({
        type: 'varchar',
        length: 50,
        default: null
    })
    private lastName: string;

    @Column({
        type: 'date',
        default: null
    })
    private birthDate: Date;

    @Column({
        type: 'boolean',
        default: false
    })
    private gdprConfirmed: boolean;

    @Column({
        type: 'varchar',
        default: null
    })
    private confirmationToken: string;

    @Column({
        type: 'varchar',
        default: null
    })
    private email: string;

    @Column({
        type: "datetime",
        default: null
    })
    private passwordRequestedAt: Date;

    @Column({
        type: 'varchar',
        default: null
    })
    private password: string;

    @Column({
        type: 'varchar',
        default: null
    })
    private roles: string;

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(value: string): this {
        this.firstName = value;
        return this;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(value: string): this {
        this.lastName = value;
        return this;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    setBirthDate(value: Date): this {
        this.birthDate = value;
        return this;
    }

    isGdprConfirmed(): boolean {
        return this.gdprConfirmed;
    }

    setGdprConfirmed(value: boolean): this {
        this.gdprConfirmed = value;
        return this;
    }

    getConfirmationToken() {
        return this.confirmationToken;
    }

    setConfirmationToken(value: string): this {
        this.confirmationToken = value;
        return this;
    }

    getPasswordRequestedAt(): Date {
        return this.passwordRequestedAt;
    }

    setPasswordRequestedAt(value: Date) {
        this.passwordRequestedAt = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string): this {
        this.email = value;
        return this;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string): this {
        this.password = value;
        return this;
    }

    getId(): number {
        return this.id;
    }

    getRoles(): string[] {
        return JSON.parse(this.roles);
    }

    setRoles(roles: string[]): this {
        this.roles = JSON.stringify(roles);
        return this;
    }
}

