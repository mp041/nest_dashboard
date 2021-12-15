import { IsString,IsEmail,IsInt,MinLength, MaxLength,IsDefined,IsNotEmpty, IsAlpha, IsMobilePhone} from 'class-validator';


export class UserDto{

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsAlpha()
    @MinLength(3)
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsAlpha()
    @MinLength(3)
    readonly lastName: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsMobilePhone()
    readonly phone: string;

    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    readonly email: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password : string;
    //



    readonly created_at?: Date;
}


// readonly address: string;
// readonly description: string;
