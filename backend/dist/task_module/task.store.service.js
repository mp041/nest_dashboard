"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStoreService = void 0;
const common_1 = require("@nestjs/common");
let TaskStoreService = class TaskStoreService {
    constructor() {
        this.tasks = [];
    }
    async addTask(task) {
        this.tasks.push(task);
        return Promise.resolve(task);
    }
    async getTask(id) {
        const taskget = this.tasks.filter(i => i.uuid === id);
        if (taskget && taskget.length > 0) {
            return Promise.resolve(taskget[0]);
        }
        throw new common_1.NotFoundException('Task not found!!!!!!!');
    }
    async getAllTask() {
        return Promise.resolve(this.tasks);
    }
    async getDelete(id) {
        const data = this.tasks.filter(i => i.uuid !== id);
        this.tasks = data;
        return Promise.resolve(this.tasks);
    }
    async filterTask(filter) {
        if (!filter) {
            return Promise.resolve(this.tasks);
        }
        return Promise.resolve(this.tasks.filter((i) => i.duration > 0));
    }
};
TaskStoreService = __decorate([
    (0, common_1.Injectable)()
], TaskStoreService);
exports.TaskStoreService = TaskStoreService;
//# sourceMappingURL=task.store.service.js.map