import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CarmodelType {
    @Field()
    model_id: number;

    @Field()
    make_id: number;

    @Field()
    model_name: string;

    @Field()
    offset_amount: number;
}