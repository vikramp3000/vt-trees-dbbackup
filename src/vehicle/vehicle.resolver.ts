import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { Vehicle } from './vehicle.model';
import { VehicleService } from './vehicle.service';
import { VehicleType } from './vehicle.type';



@Resolver(of => VehicleType)
export class VehicleResolver {
  constructor(private vehicleService: VehicleService) {}

    // create vehicle
    @Mutation(returns => VehicleType)
    createVehicle(
        @Args('model_id', { type: () => Int }) model_id: number,
        @Args('make_id', { type: () => Int }) make_id: number,
        @Args('user_id', { type: () => Int }) user_id: number,
        @Args('trim') trim: string,
        @Args('year', { type: () => Int }) year: number,
        @Args('miles', { type: () => Int }) miles: number,
        @Args('image', { type: () => String, nullable: true }) image: string,
        @Args('fuel_type') fuel_type: string,
    ): Promise<Vehicle> {
        return this.vehicleService.create({ model_id, make_id, user_id, trim, year, miles, image, fuel_type });
    }

    //get all vehicles
    @Query(returns => [VehicleType])
    async getVehicles(): Promise<VehicleType[]> {
        return this.vehicleService.findAll();
    }

    //get vehcile by id
    @Query(returns => VehicleType)
    async getVehicle(@Args('vehicle_id', { type: () => Int }) vehicle_id: number): Promise<VehicleType> {
        return this.vehicleService.findOne(vehicle_id);
    }

    //get vehicle by user_id
    // @Query(returns => [VehicleType])
    // async vehiclesByUserId(
    //   @Args('user_id', { type: () => Int }) user_id: number,
    // ): Promise<VehicleType[]> {
    //   return this.vehicleService.findByUserId(user_id);
    // }
    @Query(returns => [VehicleType])
    async vehiclesByUserId(
      @Args('user_id', { type: () => Int }) user_id: number,
    ): Promise<VehicleType[]> {
      return this.vehicleService.findByUserId(user_id);
    }

    //delete vehicle
    @Mutation(returns => VehicleType)
    async deleteVehicle(@Args('vehicle_id', { type: () => Int }) vehicle_id: number): Promise<VehicleType> {
        return this.vehicleService.delete(vehicle_id);
    }

    //update vehicle  
    @Mutation(returns => VehicleType)
    async updateVehicle(
        @Args('vehicle_id', { type: () => Int }) vehicle_id: number,
        @Args('model_id', { type: () => Int }) model_id: number,
        @Args('make_id', { type: () => Int }) make_id: number,
        @Args('user_id', { type: () => Int }) user_id: number,
        @Args('trim') trim: string,
        @Args('year', { type: () => Int }) year: number,
        @Args('miles', { type: () => Int }) miles: number,
        @Args('image', { type: () => String, nullable: true }) image: string,
        @Args('fuel_type') fuel_type: string,
    ): Promise<VehicleType> {
        return this.vehicleService.update(vehicle_id, model_id, make_id, user_id, trim, year, miles, image, fuel_type);
    }


}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/