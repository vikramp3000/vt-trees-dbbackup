import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Purchase } from './purchase.model';
import { PurchaseService } from './purchase.service';
import { PurchaseType } from './purchase.type';

@Resolver(of => PurchaseType)
export class PurchaseResolver {
  constructor(private purchaseService: PurchaseService) {}

    //create 
    @Mutation(returns => PurchaseType)
    createPurchase(
        @Args('user_id') user_id: number,
        @Args('vehicle_id') vehicle_id: number,
        @Args('number_of_trees') number_of_trees: number,
    ): Promise<PurchaseType> {
        return this.purchaseService.create({ user_id, vehicle_id, number_of_trees});
    }

    // //get all vehicles
    @Query(returns => [PurchaseType])
    async getPurchases(): Promise<PurchaseType[]> {
        return this.purchaseService.findAll();
    }

    // //get  by id
    @Query(returns => PurchaseType)
    async getPurchase(@Args('purchase_id') purchase_id: number): Promise<PurchaseType> {
        return this.purchaseService.findOne(purchase_id);
    }

    // //delete 
    @Mutation(returns => PurchaseType)
    async deletePurchase(@Args('purchase_id') purchase_id: number): Promise<PurchaseType> {
        return this.purchaseService.delete(purchase_id);
    }

    // //update vehicle  
    @Mutation(returns => PurchaseType)
    async updatePurchase(
        @Args('purchase_id') purchase_id: number,
        @Args('user_id') user_id: number,
        @Args('vehicle_id') vehicle_id: number,
        @Args('number_of_trees') number_of_trees: number,

    ): Promise<PurchaseType> {
        return this.purchaseService.update(purchase_id, user_id, vehicle_id, number_of_trees);
    }
}

/*The Resolver is responsible for handling GraphQL operations (queries, mutations, and subscriptions). 
It's the equivalent of a controller in a REST API. It receives the client's requests and returns the appropriate response. 
The resolver uses services to interact with the database or perform other business logic.*/