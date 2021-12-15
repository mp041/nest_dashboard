import { CustomerService } from './customer.service';
import { Request, Response } from 'express';
import { customerDto } from './dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    listCustomer(res: Response): Promise<void>;
    getCustomer(res: Response, id: string): Promise<void>;
    createCustomer(res: Response, createCus: customerDto): Promise<void>;
    deleteCustomer(res: Response, id: string): Promise<void>;
    updateCustomer(res: Response, id: string, req: Request): Promise<void>;
}
