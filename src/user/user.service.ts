import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}
    
      //create user injection
      async create(user: { user_name: string; user_password: string, is_admin: boolean }): Promise<User> {
        return this.userModel.create(user);
      }

      //get all users
      async findAll(): Promise<User[]> {
        return User.findAll();
      }

      //get user by id
      async findOne(user_id: number): Promise<User> {
        return User.findOne({ where: { user_id } });
      }

      //delete user
      async delete(user_id: number): Promise<User> {
        const user = await User.findOne({ where: { user_id } });
        await User.destroy({ where: { user_id } });
        return user;
      }

      //update user
      async update(user_id: number, user_name: string, user_password: string, is_admin: boolean): Promise<User> {
        const user = await User.findOne({ where: { user_id } });
        if (!user) throw new NotFoundException('User not found');
        Object.assign(user, { user_name, user_password, is_admin });
        await user.save();
        return user;
      }
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/