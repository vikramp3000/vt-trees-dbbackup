import { Module } from '@nestjs/common';
import { MakeService } from './make.service';
import { MakeController } from './make.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Make } from './make.model';
import { MakeResolver } from './make.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Make])],//importing the model
  controllers: [MakeController],
  providers: [MakeService, MakeResolver],
  exports: [MakeService], // Export service so it can be used in other modules
})
export class MakeModule {}