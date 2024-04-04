import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('MakeAndModel')
export class MakeAndModelType {
  @Field()
  make_name: string;

  @Field()
  model_name: string;

  @Field(type => Int, { nullable: true })
  total_trees: number;
}