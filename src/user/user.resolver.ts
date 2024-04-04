import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserType } from './user.type';



@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private userService: UserService,
    // Inject AuthService here
  ) {}

  //get all users
  @Query(returns => [UserType])
  async getUsers(): Promise<UserType[]> {
    return this.userService.findAll();
  }

  //get user by id
  @Query(returns => UserType)
  async getUser(@Args('user_id', { type: () => Int }) user_id: number): Promise<UserType> {
    return this.userService.findOne(user_id);
  }

  //get user by name
  @Query(returns => UserType)
  async getUserByName(@Args('user_name') user_name: string): Promise<UserType> {
    return this.userService.findByName(user_name);
  }

  //create user
  @Mutation(returns => UserType)
  createUser(
    @Args('user_name') user_name: string,
    @Args('user_password') user_password: string,
    @Args('is_admin', { type: () => Boolean, nullable: true }) is_admin: boolean,
  ): Promise<UserType> {
    return this.userService.create({ user_name, user_password, is_admin });
  }

  //delete user
  @Mutation(returns => UserType)
  async deleteUser(@Args('user_id', { type: () => Int }) user_id: number): Promise<UserType> {
    return this.userService.delete(user_id);
  }

  //update user  
  @Mutation(returns => UserType)
  async updateUser(
    @Args('user_id', { type: () => Int }) user_id: number,
    @Args('user_name') user_name: string,
    @Args('user_password') user_password: string,
    @Args('is_admin', { type: () => Boolean, nullable: true }) is_admin: boolean,
  ): Promise<UserType> {
    return this.userService.update(user_id, user_name, user_password, is_admin);
  }

  ////AUTH
  // @Mutation('login')
  // async login(@Args('username') username: string, @Args('password') password: string) {
  //   const user = await this.authService.validateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return this.authService.login(user);
  // }

  // @Query('getMe')
  // @UseGuards(AuthGuard())
  // getMe(@CurrentUser() user: User) {
  //   return user;
  // }

}

// import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

// import { User } from './user.model';
// import { UserService } from './user.service';
// import { UserType } from './user.type';

// @Resolver(of => UserType)
// export class UserResolver {
//   constructor(private userService: UserService) {}

//   //get all users
//   @Query(returns => [UserType])
//   async getUsers(): Promise<UserType[]> {
//     return this.userService.findAll();
//   }

//   //get user by id
//   @Query(returns => UserType)
//   async getUser(@Args('id') id: number): Promise<UserType> {
//     return this.userService.findOne(id);
//   }

//   //create user
//   @Mutation(returns => UserType)
//   createUser(
//     // @Args('id') id: number,
//     @Args('name') name: string,
//     @Args('email') email: string,
//     @Args('password') password: string,
//   ): Promise<UserType> {// Return UserType instead of User
//     //return this.userService.create({ id, name, email, password });
//     return this.userService.create({ name, email, password });
//   }

//   //delete user
//   @Mutation(returns => UserType)
//   async deleteUser(@Args('id') id: number): Promise<UserType> {
//     return this.userService.delete(id);
//   }

//   //update user  
//   @Mutation(returns => UserType)
//   async updateUser(
//     @Args('id') id: number,
//     @Args('name') name: string,
//     @Args('email') email: string,
//     @Args('password') password: string,
//   ): Promise<UserType> {
//     return this.userService.update(id, name, email, password);
//   }
// }

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/