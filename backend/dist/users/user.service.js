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
const bcrypt = require("bcrypt");
let CustomerService = class CustomerService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async listCustomer() {
        return await this.userRepo.find({});
    }
    async getCustomer(email) {
        console.log(email);
        const data = await this.userRepo.find({ email });
        if (!email) {
            throw new common_1.NotFoundException('user Not Found');
        }
        return data;
    }
    async getCustomerbyID(id) {
        const data = await this.userRepo.findOne(id);
        return await this.userRepo.find(data);
    }
    async createCustomer(data) {
        try {
            const email = data.email;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(data.password, saltOrRounds);
            console.log(hash, "hasssssssssssssssssssssssssss");
            if (email) {
                const edata = await this.userRepo.find({ email });
                if (edata.length === 0) {
                    const person = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        phone: data.phone,
                        email: data.email,
                        password: hash
                    };
                    const user = await this.userRepo.create(person);
                    await this.userRepo.save(user);
                    return user;
                }
                else {
                    console.log("founddddddd");
                    throw new common_1.HttpException({
                        status: common_1.HttpStatus.FORBIDDEN,
                        error: 'User is already Exist!!!!',
                    }, common_1.HttpStatus.FORBIDDEN);
                }
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async updateCustomer(id, customerdto) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(customerdto.password, saltOrRounds);
        const person = {
            firstName: customerdto.firstName,
            lastName: customerdto.lastName,
            phone: customerdto.phone,
            email: customerdto.email,
            password: hash
        };
        console.log(customerdto, "CustomerDto");
        const update = await this.userRepo.update(id, person);
        const data = await this.userRepo.findOne(id);
        console.log(update);
        return data;
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