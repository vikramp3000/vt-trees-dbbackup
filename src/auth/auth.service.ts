import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
//
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
      ) {}

//   async signIn(username: string, pass: string): Promise<any> {
//     const user = await this.userService.findByName(username);
//     if (user?.user_password !== pass) {
//       throw new UnauthorizedException();
//     }
//     const { user_password, ...result } = user;
//     // TODO: Generate a JWT and return it here
//     // instead of the user object
//     return result;
//   }


  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findByName(username);
    if (user?.user_password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.user_id, username: user.user_name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
