import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
     signIn(@Body() body: any) {
    return this.authService.signIn(body.user_name, body.user_password);
     }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @HttpCode(HttpStatus.OK)
//   @Post('login')
// //   signIn(@Body() signInDto: Record<string, any>) {
// //     return this.authService.signIn(signInDto.username, signInDto.password);
// //   }
//     signIn(@Body() body: any) {
//     return this.authService.signIn(body.user_name, body.user_password);
//   }
// }
