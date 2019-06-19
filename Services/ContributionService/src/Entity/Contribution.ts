import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { DeleteAwareMixin } from "./Mixin/DeleteAwareMixin";

@Entity()
export class Contribution extends DeleteAwareMixin {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({
        type: "int",
        default: null
    })
    private state: number;

    @Column({
        type: "int",
        default: null
    })
    private timeline: number;

    @Column({
        type: "int",
        default: null
    })
    private event: number;

    @Column({
        type: "int",
        default: null
    })
    private user: number;

    @Column({
        type: "datetime",
        default: null
    })
    private date: Date;


    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getState(): number {
        return this.state;
    }

    setState(value: number): Contribution {
        this.state = value;
        return  this;
    }

    getTimeline(): number {
        return this.timeline;
    }

    setTimeline(value: number): Contribution{
        this.timeline = value;
        return this;
    }

    getEvent(): number {
        return this.event;
    }

    setEvent(value: number): Contribution {
        this.event = value;
        return this;
    }

    getUser(): number {
        return this.user;
    }

    setUser(value: number): Contribution {
        this.user = value;
        return this;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(value: Date): this {
        this.date = value;
        return this;
    }
}

