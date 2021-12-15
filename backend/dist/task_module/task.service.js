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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_store_service_1 = require("./task.store.service");
const uuidv4_1 = require("uuidv4");
let TaskService = class TaskService {
    constructor(taskStoreService) {
        this.taskStoreService = taskStoreService;
    }
    async addTask(task) {
        task.uuid = (0, uuidv4_1.uuid)();
        return this.taskStoreService.addTask(task);
    }
    async getTask(id) {
        return this.taskStoreService.getTask(id);
    }
    async getAllTask() {
        return this.taskStoreService.getAllTask();
    }
    async getDelete(id) {
        return this.taskStoreService.getDelete(id);
    }
    async filterTask(filter) {
        return this.taskStoreService.filterTask(filter);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_store_service_1.TaskStoreService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map