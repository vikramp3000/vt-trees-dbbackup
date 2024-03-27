import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Carmodel } from './carmodel.model';
import { CarmodelService } from './carmodel.service';
import { CarmodelType } from './carmodel.type';

@Resolver(of => CarmodelType)
export class CarmodelResolver {
  constructor(private carmodelService: CarmodelService) {}


    //create model
    @Mutation(returns => CarmodelType)
    createModel(
        @Args('make_id') make_id: number,
        @Args('model_name') model_name: string,
        @Args('offset_amount') offset_amount: number,
    ): Promise<CarmodelType> {
        return this.carmodelService.create({ make_id, model_name, offset_amount });
    }

    // //get all vehicles
    // @Query(returns => [VehicleType])
    // async getVehicles(): Promise<VehicleType[]> {
    //     return this.vehicleService.findAll();
    // }

    // //get vehcile by id
    // @Query(returns => VehicleType)
    // async getVehicle(@Args('vehicle_id') vehicle_id: number): Promise<VehicleType> {
    //     return this.vehicleService.findOne(vehicle_id);
    // }

    // //delete vehicle
    // @Mutation(returns => VehicleType)
    // async deleteVehicle(@Args('vehicle_id') vehicle_id: number): Promise<VehicleType> {
    //     return this.vehicleService.delete(vehicle_id);
    // }

    // //update vehicle  
    // @Mutation(returns => VehicleType)
    // async updateVehicle(
    //     @Args('vehicle_id') vehicle_id: number,
    //     @Args('model_id') model_id: number,
    //     @Args('make_id') make_id: number,
    //     @Args('user_id') user_id: number,
    //     @Args('trim') trim: string,
    //     @Args('year') year: number,
    //     @Args('miles') miles: number,
    //     @Args('image', { type: () => String, nullable: true }) image: string,
    //     @Args('fuel_type') fuel_type: string,
    // ): Promise<VehicleType> {
    //     return this.vehicleService.update(vehicle_id, model_id, make_id, user_id, trim, year, miles, image, fuel_type);
    // }
}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/