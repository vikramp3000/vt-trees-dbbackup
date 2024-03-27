import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserResolver } from './user.resolver';

@Module({
  imports: [SequelizeModule.forFeature([User])],//importing the User model
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService], // Export UserService so it can be used in other modules
})
export class UserModule {}

/*Each application has at least one module, known as the root module. 
The root module is the starting point Nest uses to build the application graph 
- the internal data structure Nest uses to resolve dependencies. 
The root module is the only module that should import external modules. 
Other modules should be self-contained and reusable.*/