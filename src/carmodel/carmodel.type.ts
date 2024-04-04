import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CarmodelType {
    @Field(type => Int)
    model_id: number;

    @Field(type => Int)
    make_id: number;

    @Field()
    model_name: string;

    @Field(type => Int)
    offset_amount: number;
}