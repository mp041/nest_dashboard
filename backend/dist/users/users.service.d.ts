export declare type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};
export declare class UsersService {
    private readonly users;
    findOne(username: string): Promise<User | undefined>;
    register(data: any): Promise<any>;
}
