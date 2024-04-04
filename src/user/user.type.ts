// user/user.type.ts
import { Field, ObjectType,Int } from '@nestjs/graphql';

@ObjectType()
export class UserType {
    @Field(type => Int)
    user_id: number;

    @Field()
    user_name: string;

    @Field()
    user_password: string;

    @Field()
    is_admin: boolean;
}



// import { Field, ObjectType } from '@nestjs/graphql';

// @ObjectType('User')
// export class UserType {
//   @Field()
//   id: number;

//   @Field()
//   name: string;

//   @Field()
//   email: string;

//   @Field()
//   password: string;
// }

/*The UserType, s a GraphQL object type. 
It's used to define the shape of the User data that your GraphQL API returns. 
It's decorated with the @ObjectType decorator from the @nestjs/graphql package, 
and its fields are decorated with the @Field decorator. 
This tells GraphQL what fields a User object can have and what types those fields are.*/