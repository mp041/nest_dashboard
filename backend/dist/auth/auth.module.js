"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../users/user.service");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
const user_entity_1 = require("../users/Database/entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../users/user.module");
const employee_enitity_1 = require("../users/Database/entity/employee.enitity");
const task_entity_1 = require("../users/Database/entity/task.entity");
const contact_entity_1 = require("../users/Database/entity/contact.entity");
const meeting_entity_1 = require("../users/Database/entity/meeting.entity");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, employee_enitity_1.Employee, task_entity_1.Task, contact_entity_1.Contact, meeting_entity_1.Meeting]), passport_1.PassportModule, jwt_1.JwtModule.register({
                secret: 'SECRET',
                signOptions: { expiresIn: '36000s' }
            })],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, user_service_1.CustomerService],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map