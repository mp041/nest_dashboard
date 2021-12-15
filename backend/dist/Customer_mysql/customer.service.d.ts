import { Model } from 'mongoose';
import { customerDto } from './dto';
import { Customer } from './interface/customer.interface';
export declare class CustomerService {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
    listCustomer(): Promise<Customer[]>;
    getCustomer(id: string): Promise<Customer>;
    createCustomer(customerdto: customerDto): Promise<Customer>;
    updateCustomer(id: any, customerdto: customerDto): Promise<Customer>;
    removeCustomer(id: string): Promise<Customer>;
}
