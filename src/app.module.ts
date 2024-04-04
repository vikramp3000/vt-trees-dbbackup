import { Module, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { MakeModule } from './make/make.module';
import { CarmodelModule } from './carmodel/carmodel.module';
import { PurchaseModule } from './purchase/purchase.module';

import { UserResolver } from './user/user.resolver';
import { VehicleResolver } from './vehicle/vehicle.resolver';
import { MakeResolver } from './make/make.resolver';
import { CarmodelResolver } from './carmodel/carmodel.resolver';
import { PurchaseResolver } from './purchase/purchase.resolver';
import { AuthResolver } from './auth/auth.resolver';

import { User } from './user/user.model';
import { Make } from './make/make.model';
import { Carmodel } from './carmodel/carmodel.model';
import { Vehicle } from './vehicle/vehicle.model';
import { Purchase } from './purchase/purchase.model';
import { MakeController } from './make/make.controller';
// import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';

//the db connection established in the app.module.ts file
//should be in an env but yolo

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'carbonoffset',
      autoLoadModels: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    VehicleModule,
    MakeModule,
    CarmodelModule,
    PurchaseModule,
    AuthModule,
    // AuthModule
    // 
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, VehicleResolver, MakeResolver, CarmodelResolver, PurchaseResolver, AuthResolver],
})
// export class AppModule {}
export class AppModule implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  // async onModuleInit() {
  //   await this.sequelize.sync({ alter: true });
  // }
  // async onModuleInit() {
  //   await this.sequelize.model('User').sync({ alter: true });
  //   await this.sequelize.model('Make').sync({ alter: true });
  //   await this.sequelize.model('Carmodel').sync({ alter: true });
  //   await this.sequelize.model('Vehicle').sync({ alter: true });
  // }
  async onModuleInit() {
    await User.sync({ alter: true });
    await Make.sync({ alter: true });
    await Carmodel.sync({ alter: true });
    await Vehicle.sync({ alter: true });
    await Purchase.sync({ alter: true });
  }
}