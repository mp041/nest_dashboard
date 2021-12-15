import { Repository } from 'typeorm';
import { User } from './Database/entity/user.entity';
export declare class CustomerService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    listCustomer(): Promise<User[]>;
    getCustomer(id: string): Promise<User>;
    createCustomer(data: any): Promise<any>;
    updateCustomer(id: string, customerdto: any): Promise<any>;
    removeCustomer(id: string): Promise<User>;
}
