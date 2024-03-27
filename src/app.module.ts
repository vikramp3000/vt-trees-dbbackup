import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { MakeModule } from './make/make.module';
import { CarmodelModule } from './carmodel/carmodel.module';
import { PurchaseModule } from './purchase/purchase.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserResolver } from './user/user.resolver';
import { VehicleResolver } from './vehicle/vehicle.resolver';
import { MakeResolver } from './make/make.resolver';
import { CarmodelResolver } from './carmodel/carmodel.resolver';
import { PurchaseResolver } from './purchase/purchase.resolver';

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
    PurchaseModule
    // 
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, VehicleResolver, MakeResolver, CarmodelResolver, PurchaseModule],
})
export class AppModule {}