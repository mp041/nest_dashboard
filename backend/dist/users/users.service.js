"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'Mihir',
                username: 'mihir',
                password: 'pass'
            },
            {
                id: 2,
                name: 'Panchal',
                username: 'panchal',
                password: 'pass'
            }, {
                id: 3,
                name: 'naruto',
                username: 'demo',
                password: 'demo'
            }
        ];
    }
    async findOne(username) {
        console.log(this.users);
        return this.users.find(user => user.username === username);
    }
    async register(data) {
        console.log(data);
        try {
            this.users.push(data);
            console.log(data, "miid");
            return Promise.resolve(data);
        }
        catch (error) {
            console.log("after register");
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map