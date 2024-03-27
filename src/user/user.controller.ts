// user.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //POST IS USED IN REST API
  // @Post()
  // create(@Body() user: { id: number; name: string; email: string; password: string }): Promise<User> {
  //   return this.userService.create(user);
  // }
}

/*In summary, the UserController is responsible for handling HTTP requests at the /users endpoint. 
It uses the UserService to interact with the database and perform operations related to users. 
In this case, the UserController only has a create method that is used to create a new user.*/