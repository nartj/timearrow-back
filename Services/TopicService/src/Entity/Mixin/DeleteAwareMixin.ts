import { Column } from "typeorm";

export class DeleteAwareMixin {

    @Column({
        type: 'boolean',
        default: false
    })
    protected deleted: boolean;

    public setDeleted(deleted: boolean): this {
        this.deleted = deleted;
        return this;
    }

    public isDeleted(): boolean {
        return this.deleted;
    }
}
