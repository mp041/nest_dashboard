"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMysqlModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const employee_enitity_1 = require("./entity/employee.enitity");
const task_entity_1 = require("./entity/task.entity");
const meeting_entity_1 = require("./entity/meeting.entity");
const contact_entity_1 = require("./entity/contact.entity");
let DataMysqlModule = class DataMysqlModule {
};
DataMysqlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'mihir',
                password: 'ubuntu',
                database: 'test',
                entities: [user_entity_1.User, employee_enitity_1.Employee, task_entity_1.Task, meeting_entity_1.Meeting, contact_entity_1.Contact],
                synchronize: true,
            }),
        ],
    })
], DataMysqlModule);
exports.DataMysqlModule = DataMysqlModule;
//# sourceMappingURL=Database.module.js.map