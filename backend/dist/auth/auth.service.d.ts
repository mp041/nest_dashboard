import { HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../users/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: CustomerService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        access_token: string;
    }>;
    generateToken(): Promise<any>;
}
