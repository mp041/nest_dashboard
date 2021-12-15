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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const task_1 = require("./dto/task");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getAllTask(res) {
        const data = await this.taskService.getAllTask();
        return res.status(200).send(data);
    }
    async getTaskById(reqParams, res) {
        const data = await this.taskService.getTask(reqParams.id);
        return res.status(200).send(data);
    }
    async getDeleteById(reqParams, res) {
        const data = await this.taskService.getDelete(reqParams.id);
        return res.status(200).send(data);
    }
    async FilterById(filter, res) {
        const data = await this.taskService.filterTask(filter);
        return res.status(200).send(data);
    }
    async createTask(task, res) {
        const data = await this.taskService.addTask(task);
        return res.status(200).send(data);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTask", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_1.idBodyDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_1.idBodyDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getDeleteById", null);
__decorate([
    (0, common_1.Get)('/filter/data'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Query)('filter')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseBoolPipe, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "FilterById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_1.TaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map