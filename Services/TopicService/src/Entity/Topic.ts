import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { DeleteAwareMixin } from "./Mixin/DeleteAwareMixin";

@Entity()
export class Topic extends DeleteAwareMixin {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({
        type: "varchar",
        default: null
    })
    private code: string;

    @Column({
        type: "varchar",
        default: null
    })
    private libelle: string;

    @Column({
        type: "varchar",
        default: null
    })
    private badge: string;

    @Column({
        type: "simple-array",
        default: null
    })
    private timelines: Array<number>;

    getId(): number {
        return this.id;
    }

    setId(value: number): this {
        this.id = value;
        return this;
    }

    getCode(): string {
        return this.code;
    }

    setCode(value: string): this {
        this.code = value;
        return this;
    }

    getLibelle(): string {
        return this.libelle;
    }

    setLibelle(value: string): this {
        this.libelle = value;
        return this;
    }

    getBadge(): string {
        return this.badge;
    }

    setBadge(value: string): this {
        this.badge = value;
        return this;
    }

    getTimelines(): Array<number> {
        return this.timelines;
    }

    setTimelines(value: Array<number>): this {
        this.timelines = value;
        return this;
    }
}

