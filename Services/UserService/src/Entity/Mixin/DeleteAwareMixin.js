"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var DeleteAwareMixin = /** @class */ (function () {
    function DeleteAwareMixin() {
    }
    DeleteAwareMixin.prototype.setDeleted = function (deleted) {
        this.deleted = deleted;
        return this;
    };
    DeleteAwareMixin.prototype.isDeleted = function () {
        return this.deleted;
    };
    __decorate([
        typeorm_1.Column({
            type: 'boolean',
            default: false
        }),
        __metadata("design:type", Boolean)
    ], DeleteAwareMixin.prototype, "deleted", void 0);
    return DeleteAwareMixin;
}());
exports.DeleteAwareMixin = DeleteAwareMixin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlQXdhcmVNaXhpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRlbGV0ZUF3YXJlTWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBaUM7QUFFakM7SUFBQTtJQWdCQSxDQUFDO0lBUlUscUNBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9DQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFURDtRQUpDLGdCQUFNLENBQUM7WUFDSixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7O3FEQUN5QjtJQVUvQix1QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVBd2FyZU1peGluIHtcblxuICAgIEBDb2x1bW4oe1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgZGVsZXRlZDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXREZWxldGVkKGRlbGV0ZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy5kZWxldGVkID0gZGVsZXRlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRGVsZXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlZDtcbiAgICB9XG59XG4iXX0=