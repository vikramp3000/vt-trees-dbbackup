import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Make } from './make.model';
import { MakeService } from './make.service';
import { MakeType } from './make.type';

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
    async getMake(@Args('make_id') make_id: number): Promise<MakeType> {
        return this.makeService.findOne(make_id);
    }

    // //delete 
    @Mutation(returns => MakeType)
    async deleteMake(@Args('make_id') make_id: number): Promise<MakeType> {
        return this.makeService.delete(make_id);
    }

    //update vehicle  
    @Mutation(returns => MakeType)
    async updateMake(
        @Args('make_id') make_id: number,
        @Args('make_name') make_name: string,
    ): Promise<MakeType> {
        return this.makeService.update(make_id, make_name);
    }
}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/