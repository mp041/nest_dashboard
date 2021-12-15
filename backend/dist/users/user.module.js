"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./Database/entity/user.entity");
const users_service_1 = require("./users.service");
const employee_enitity_1 = require("./Database/entity/employee.enitity");
const task_entity_1 = require("./Database/entity/task.entity");
const contact_entity_1 = require("./Database/entity/contact.entity");
const meeting_entity_1 = require("./Database/entity/meeting.entity");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, employee_enitity_1.Employee, task_entity_1.Task, contact_entity_1.Contact, meeting_entity_1.Meeting])],
        controllers: [user_controller_1.CustomerController],
        providers: [user_service_1.CustomerService, users_service_1.UsersService],
        exports: [users_service_1.UsersService]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map