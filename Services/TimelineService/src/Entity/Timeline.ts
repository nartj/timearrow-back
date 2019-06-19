import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { DeleteAwareMixin } from "./Mixin/DeleteAwareMixin";

@Entity()
export class Timeline extends DeleteAwareMixin {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({
        type: "varchar",
        default: null
    })
    private title: string;

    @Column({
        type: "datetime",
        default: null
    })
    private from: Date;

    @Column({
        type: "datetime",
        default: null
    })
    private to: Date;

    @Column({
        type: "longtext",
        default: null
    })
    private resume: string;

    @Column({
        type: "simple-array",
        default: null
    })
    private topics: Array<number>;

    @Column({
        type: "simple-array",
        default: null
    })
    private contributions: Array<number>;

    @Column({
        type: "simple-array",
        default: null
    })
    private events: Array<number>;

    getId(): number {
        return this.id;
    }

    setId(value: number): this {
        this.id = value;
        return this;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(value: string): this {
        this.title = value;
        return this;
    }

    getFrom(): Date {
        return this.from;
    }

    setFrom(value: Date): this {
        this.from = value;
        return this;
    }

    getTo(): Date {
        return this.to;
    }

    setTo(value: Date): this {
        this.to = value;
        return this;
    }

    getResume(): string {
        return this.resume;
    }

    setResume(value: string): this {
        this.resume = value;
        return this;
    }

    getTopics(): Array<number> {
        return this.topics;
    }

    setTopics(value: Array<number>): this {
        this.topics = value;
        return this;
    }

    getContributions(): Array<number> {
        return this.contributions;
    }

    setContributions(value: Array<number>): this {
        this.contributions = value;
        return this;
    }

    getEvent(): Array<number> {
        return this.events;
    }

    setEvent(value: Array<number>): this {
        this.events = value;
        return this;
    }
}

