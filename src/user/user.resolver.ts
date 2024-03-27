// user/user.resolver.ts
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver(of => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  //get all users
  @Query(returns => [UserType])
  async getUsers(): Promise<UserType[]> {
    return this.userService.findAll();
  }

  //get user by id
  @Query(returns => UserType)
  async getUser(@Args('id') id: number): Promise<UserType> {
    return this.userService.findOne(id);
  }

  //create user
  @Mutation(returns => UserType)
  createUser(
    // @Args('id') id: number,
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserType> {// Return UserType instead of User
    //return this.userService.create({ id, name, email, password });
    return this.userService.create({ name, email, password });
  }

  //delete user
  @Mutation(returns => UserType)
  async deleteUser(@Args('id') id: number): Promise<UserType> {
    return this.userService.delete(id);
  }

  //update user  
  @Mutation(returns => UserType)
  async updateUser(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserType> {
    return this.userService.update(id, name, email, password);
  }
}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/