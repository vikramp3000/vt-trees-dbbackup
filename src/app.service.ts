// app.service.ts
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}

  // getHello(): string {
  //   return 'Hello World!';
  // }

  // async testDBConnection(): Promise<string> {
  //   try {
  //     await this.sequelize.authenticate();
  //     return 'Connection has been established successfully.';
  //   } catch (error) {
  //     return 'Unable to connect to the database:';
  //   }
  // }
}