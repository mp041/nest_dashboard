import { HttpStatus } from '@nestjs/common';
import { CustomerService } from './user.service';
import { Response } from 'express';
import { UserDto } from './dto/index';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    listCustomer(res: Response): Promise<void>;
    getCustomer(res: Response, id: string): Promise<void>;
    getCustomerbyID(res: Response, id: string): Promise<void>;
    createCustomer(res: Response, createCus: UserDto): Promise<void>;
    deleteCustomer(res: Response, id: string): Promise<void>;
    updateCustomer(id: string, updateCus: UserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
