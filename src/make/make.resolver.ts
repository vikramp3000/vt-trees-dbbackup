import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { Make } from './make.model';
import { MakeService } from './make.service';
import { MakeType } from './make.type';
import { MakeAndModelType } from './totaltrees.type';
import { CarmodelType } from 'src/carmodel/carmodel.type';
import { Carmodel } from '../carmodel/carmodel.model';

@Resolver(of => MakeType)
export class MakeResolver {
  constructor(private makeService: MakeService) {}

    //create make
    @Mutation(returns => MakeType)
    createMake(
        @Args('make_name') make_name: string,
    ): Promise<MakeType> {
        return this.makeService.create({ make_name });
    }

    //get all vehicles
    @Query(returns => [MakeType])
    async getMakes(): Promise<MakeType[]> {
        return this.makeService.findAll();
    }

    //get  by id
    @Query(returns => MakeType)
    async getMake(@Args('make_id', { type: () => Int }) make_id: number): Promise<MakeType> {
        return this.makeService.findOne(make_id);
    }

    // //delete
    @Mutation(returns => MakeType)
    async deleteMake(@Args('make_id', { type: () => Int }) make_id: number): Promise<MakeType> {
        return this.makeService.delete(make_id);
    }

    //update vehicle  
    @Mutation(returns => MakeType)
    async updateMake(
        @Args('make_id', { type: () => Int }) make_id: number,
        @Args('make_name') make_name: string,
    ): Promise<MakeType> {
        return this.makeService.update(make_id, make_name);
    }

    //get models by make
    @Query(returns => [CarmodelType])
        async getModelsByMake(@Args('makeName') makeName: string): Promise<CarmodelType[]> {
        return this.makeService.findModelsByMake(makeName);
    }

    //find models for leaderboard
    @Query(returns => [MakeAndModelType])
        async getAllMakesAndModels(): Promise<MakeAndModelType[]> {
        return this.makeService.findAllMakesAndModels();
    }

    //search for models and trees
    @Query(returns => [MakeAndModelType])
    async searchMakesAndModels(
      @Args('make_name', { type: () => String, nullable: true }) make_name: string,
      @Args('model_name', { type: () => String, nullable: true }) model_name: string,
    ) {
      return this.makeService.findMakesAndModelsBySearch(make_name, model_name);
    }

    //find models for updateratio
    @Query(returns => [MakeType])
    async allMakesWithModels() {
      return this.makeService.findAllMakesWithModels();
    }
}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/