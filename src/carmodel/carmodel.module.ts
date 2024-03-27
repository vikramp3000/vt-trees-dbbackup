import { Module } from '@nestjs/common';
import { CarmodelService } from './carmodel.service';
import { CarmodelController } from './carmodel.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Carmodel } from './carmodel.model';
import { CarmodelResolver } from './carmodel.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Carmodel])],//importing the model
  controllers: [CarmodelController],
  providers: [CarmodelService, CarmodelResolver],
  exports: [CarmodelService], // Export service so it can be used in other modules
})
export class CarmodelModule {}