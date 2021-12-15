import { Injectable,NotFoundException,HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '';
// import { UsersService } from '../users/users.service';
import { CustomerService } from '../users/user.service';
import * as sha256   from 'crypto-js/sha256';
import * as hmacSHA512  from 'crypto-js/hmac-sha512';
import * as Base64  from 'crypto-js/enc-base64';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private userService: CustomerService, private jwtService: JwtService) { }



  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getCustomer(email);

    // console.log(user,"not found")
    if(user.length === 0){

      throw new NotFoundException('user not found');

    }



    // console.log(user, "AuthService")

    console.log(user[0].password)
    const isMatch = await bcrypt.compare(password, user[0].password);
    // console.log(isMatch,"compareeeeeeeeeeeeeeeeeeeeee")

    if (user && isMatch) {
      // console.log("user email got")
      const { password, ...rest } = user[0];
      console.log(rest)
      return rest;
    }

    return null;
  }








  async login(user: any) {
    console.log(user, "token time user")

    const payload = { firstname: user.firstName, lastname: user.lastName, email: user.email, sub: user.id };

    // console.log("token before generate");

    return {
      statusCode : HttpStatus.CREATED,
      message : 'User Login Success',
      access_token: this.jwtService.sign(payload),
    }
  }




  async generateToken(): Promise<any> {
    try {
      // let privateKey = "6b0c6924d25fd0783762dc4721306ac8";
      // let secretKey = "3358bbcf0e5018e37bf8f5299254e442";
      // // let timestamp = "3358bbcf0e5018e37bf8f5299254e442";
      // // let nonce = "6b0c6924d25fd0783762dc4721306ac8";
      // console.log(crypto.Hmac('sha256', 'a secret', 'my data', 'hex'));
      // var hmac =await crypto.hmac('sha256', privateKey);
      // console.log(hmac)
      // let signed = hmac.update(secretKey + timestamp + nonce).digest("hex");
      // console.log(signed);
      const message = "helloiammihir";
      const nonce = "6b0c6924d25fd0783762dc4721306ac8";
      const path = "12345678"
      const privateKey = "3358bbcf0e5018e37bf8f5299254e442";

      // const message, nonce, path, privateKey; // ...
      const hashDigest = sha256(nonce + message);
      const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));
      console.log(hmacDigest);
    } catch (error) {
      console.log(error);
    }
  }
}




// $2b$10$5XbEm/4qYUyXVXCLdXkXLeE7HbcWVSDSTiKybuZmspmTGZ4wbmNF6
// $2b$10$5XbEm/4qYUyXVXCLdXkXLeE7HbcWVSDSTiKybuZmspmTGZ4wbmNF6
