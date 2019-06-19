import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { DeleteAwareMixin } from "./Mixin/DeleteAwareMixin";

@Entity()
export class State extends DeleteAwareMixin {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({
        type: "int",
        default: null
    })
    private code: number;

    @Column({
        type: "varchar",
        default: null
    })
    private libelle: string;

    @Column({
        type: "int",
        default: null
    })
    private contribution: number;

    getId(): number {
        return this.id;
    }

    setId(value: number): this {
        this.id = value;
        return this;
    }

    getCode(): number {
        return this.code;
    }

    setCode(value: number): this {
        this.code = value;
        return this;
    }

    getLibelle(): string {
        return this.libelle;
    }

    setLibelle(value: string): this {
        this.libelle = value;
        return  this;
    }

    getContribution(): number {
        return this.contribution;
    }

    setContribution(value: number): this {
        this.contribution = value;
        return this;
    }
}

