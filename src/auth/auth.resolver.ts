import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserType } from '../user/user.type';

@Resolver(of => UserType)
export class AuthResolver {
  constructor(
    private userService: UserService,
    private jwtService: JwtService, // Inject JwtService here
  ) {}


  //signIn user
//   @Mutation(returns => String) // Assuming the signIn mutation returns a string (the access token)
//   async signIn(
//     @Args('user_name') user_name: string,
//     @Args('user_password') user_password: string,
//   ): Promise<{ access_token: string }> {
//     const user = await this.userService.findByName(user_name);
//     if (user?.user_password !== user_password) {
//       throw new UnauthorizedException();
//     }
//     const payload = { sub: user.user_id, username: user.user_name };
//     return {
//       access_token: await this.jwtService.signAsync(payload),
//     };
//   }

//signIn user
@Mutation(returns => String) // Assuming the signIn mutation returns a string (the access token)
async signIn(
  @Args('user_name') user_name: string,
  @Args('user_password') user_password: string,
): Promise<string> { // Change the return type to Promise<string>
  const user = await this.userService.findByName(user_name);
  if (user?.user_password !== user_password) {
    throw new UnauthorizedException();
  }
  const payload = { sub: user.user_id, username: user.user_name, isAdmin: user.is_admin }; // this is the payload
  const access_token = await this.jwtService.signAsync(payload); // Assign the return value to access_token directly
  
  return access_token; // Return just the access token string
}
}
