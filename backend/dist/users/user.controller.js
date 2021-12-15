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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const index_1 = require("./dto/index");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async listCustomer(res) {
        const data = await this.customerService.listCustomer();
        res.status(200).send({
            statusCode: common_1.HttpStatus.OK,
            message: 'All Users',
            data
        });
    }
    async getCustomer(res, id) {
        const data = await this.customerService.getCustomer(id);
        res.status(200).send(data);
    }
    async getCustomerbyID(res, id) {
        const data = await this.customerService.getCustomerbyID(id);
        console.log(data, "gettttgggggggggggggggggggggggg");
        res.status(200).send({
            statusCode: common_1.HttpStatus.OK,
            message: 'User Getting success',
            data
        });
    }
    async createCustomer(res, createCus) {
        console.log(createCus, "create cu");
        const data = await this.customerService.createCustomer(createCus);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: common_1.HttpStatus.OK,
            message: 'User Created Success',
            data
        });
    }
    async deleteCustomer(res, id) {
        const data = await this.customerService.removeCustomer(id);
        res.status(200).json({
            statusCode: common_1.HttpStatus.OK,
            message: 'User Deleted Success',
            data
        });
    }
    async updateCustomer(id, updateCus) {
        const data = await this.customerService.updateCustomer(id, updateCus);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User Update Successfully',
            data
        };
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "listCustomer", null);
__decorate([
    (0, common_1.Get)('/:customerid'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('customerid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomer", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/get/:customerid'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('customerid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerbyID", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, index_1.UserDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:customerid'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('customerid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomer", null);
__decorate([
    (0, common_1.Put)('/:customerid'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('customerid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, index_1.UserDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomer", null);
CustomerController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=user.controller.js.map