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
const dto_1 = require("./dto");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async listCustomer(res) {
        const data = await this.customerService.listCustomer();
        res.status(200).send(data);
    }
    async getCustomer(res, id) {
        const data = await this.customerService.getCustomer(id);
        res.status(200).send(data);
    }
    async createCustomer(res, createCus) {
        console.log(createCus, "create cu");
        const data = await this.customerService.createCustomer(createCus);
        res.status(common_1.HttpStatus.OK).json(data);
    }
    async deleteCustomer(res, id) {
        const data = await this.customerService.removeCustomer(id);
        res.status(200).json({
            message: 'customer deleted success',
            data
        });
    }
    async updateCustomer(res, id, updateCus) {
        const data = await this.customerService.updateCustomer(id, updateCus);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User Update successfully',
        };
    }
};
__decorate([
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
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Delete)('/:customerid'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('customerid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomer", null);
__decorate([
    (0, common_1.Patch)('/:customerid'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('customerid')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomer", null);
CustomerController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=user.controller.js.map