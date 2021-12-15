import { Repository } from 'typeorm';
import { User } from './Database/entity/user.entity';
import { UserDto } from './dto/index';
export declare class CustomerService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    listCustomer(): Promise<User[]>;
    getCustomer(email: string): Promise<any>;
    getCustomerbyID(id: string): Promise<any>;
    createCustomer(data: UserDto): Promise<any>;
    updateCustomer(id: string, customerdto: UserDto): Promise<any>;
    removeCustomer(id: string): Promise<User>;
}
