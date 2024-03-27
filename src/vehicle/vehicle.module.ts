import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.model';
import { VehicleResolver } from './vehicle.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Vehicle])],//importing the model
  controllers: [VehicleController],
  providers: [VehicleService, VehicleResolver],
  exports: [VehicleService], // Export service so it can be used in other modules
})
export class VehicleModule {}