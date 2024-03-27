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

    // //get all 
    @Query(returns => [CarmodelType])
    async getModels(): Promise<CarmodelType[]> {
        return this.carmodelService.findAll();
    }

    // //get  by id
    @Query(returns => CarmodelType)
    async getModel(@Args('model_id') model_id: number): Promise<CarmodelType> {
        return this.carmodelService.findOne(model_id);
    }

    // //delete vehicle
    @Mutation(returns => CarmodelType)
    async deleteModel(@Args('model_id') model_id: number): Promise<CarmodelType> {
        return this.carmodelService.delete(model_id);
    }

    // //update vehicle  
    @Mutation(returns => CarmodelType)
    async updateModel(
        @Args('model_id') model_id: number,
        @Args('make_id') make_id: number,
        @Args('model_name') model_name: string,
        @Args('offset_amount') offset_amount: number,
    ): Promise<CarmodelType> {
        return this.carmodelService.update(model_id, make_id, model_name, offset_amount);
    }
}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/