"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Querydto = exports.idBodyDto = exports.TaskDto = void 0;
const class_validator_1 = require("class-validator");
class TaskDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], TaskDto.prototype, "name", void 0);
exports.TaskDto = TaskDto;
class idBodyDto {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], idBodyDto.prototype, "id", void 0);
exports.idBodyDto = idBodyDto;
class Querydto {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Boolean)
], Querydto.prototype, "filter", void 0);
exports.Querydto = Querydto;
//# sourceMappingURL=task.js.map