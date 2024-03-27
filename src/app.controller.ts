import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Use the @Get() decorator to define a route handler for the root URL (/) in REST
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('test-db')
  // testDBConnection(): Promise<string> {
  //   return this.appService.testDBConnection();
  // }
}
