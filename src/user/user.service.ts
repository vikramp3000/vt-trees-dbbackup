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
      async create(user: { name: string; email: string, password: string }): Promise<User> {
        return this.userModel.create(user);
      }

      //get all users
      async findAll(): Promise<User[]> {
        return User.findAll();
      }

      //get user by id
      async findOne(id: number): Promise<User> {
        return User.findOne({ where: { id } });
      }

      //delete user
      async delete(id: number): Promise<User> {
        const user = await User.findOne({ where: { id } });
        await User.destroy({ where: { id } });
        return user;
      }

      //update user
      async update(id: number, name: string, email: string, password: string): Promise<User> {
        const user = await User.findOne({ where: { id } });
        if (!user) throw new NotFoundException('User not found');
        Object.assign(user, { name, email, password });
        await user.save();
        return user;
      }
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/