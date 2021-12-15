import { Injectable,HttpStatus } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {


        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey: 'SECRET'
        })
    }

    async validate(payload: any){
        // console.log(ExtractJwt.fromAuthHeaderAsBearerToken());
        console.log(payload,"payload")
        return {
            statusCode : HttpStatus.OK,
            message : 'Jwt Granted Success',
            id: payload.sub,
            firstname : payload.firstname,
            lastname : payload.lastname,
            email: payload.email

        }
    }
}
