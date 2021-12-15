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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./Database/entity/user.entity");
let CustomerService = class CustomerService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async listCustomer() {
        return await this.userRepo.find({});
    }
    async getCustomer(id) {
        const data = await this.userRepo.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('user not found');
        }
        return data;
    }
    async createCustomer(data) {
        try {
            const user = await this.userRepo.create(data);
            await this.userRepo.save(user);
            console.log(data);
            return user;
            const saveperson = await this.userRepo.create(user);
            await this.userRepo.save(user);
            console.log(user, "nfaknkfanakfkak");
            return saveperson;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async updateCustomer(id, customerdto) {
        const update = await this.userRepo.update(id, customerdto);
        console.log(update);
        return await this.userRepo.findOne(id);
    }
    async removeCustomer(id) {
        const data = await this.userRepo.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('user not found');
        }
        return await this.userRepo.remove(data);
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=user.service.js.map