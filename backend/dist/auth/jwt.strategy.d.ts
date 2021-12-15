import { HttpStatus } from "@nestjs/common";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        id: any;
        firstname: any;
        lastname: any;
        email: any;
    }>;
}
export {};
