// user.controller.ts
import { Controller } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService) {}
}

/*In summary, the VehicleController is responsible for handling HTTP requests at the /vehicles endpoint. 
It uses the VehicleService to interact with the database and perform operations related to vehicles. 
The controller is a class decorated with the @Controller decorator from the @nestjs/common module.*/