import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Purchase } from './purchase.model';
import { PurchaseResolver } from './purchase.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Purchase])],//importing the model
  controllers: [PurchaseController],
  providers: [PurchaseService, PurchaseResolver],
  exports: [PurchaseService], // Export service so it can be used in other modules
})
export class PurchaseModule {}