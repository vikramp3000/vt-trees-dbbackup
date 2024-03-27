//make/make.type.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PurchaseType {
    @Field()
    purchase_id: number;

    @Field()
    user_id: number;

    @Field()
    vehicle_id: number;

    @Field()
    number_of_trees: number;
}