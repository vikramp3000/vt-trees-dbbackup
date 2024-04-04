//make/make.type.ts
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CarmodelType } from 'src/carmodel/carmodel.type';

@ObjectType()
export class MakeType {
    @Field(type => Int)
    make_id: number;

    @Field()
    make_name: string;

    @Field(type => [CarmodelType], { nullable: true })
    carmodels: CarmodelType[];
}