//make/make.type.ts
import { Field, ObjectType,Int } from '@nestjs/graphql';

@ObjectType()
export class PurchaseType {
    @Field(type => Int)
    purchase_id: number;

    @Field(type => Int)
    user_id: number;

    @Field(type => Int)
    vehicle_id: number;

    @Field(type => Int)
    number_of_trees: number;
}