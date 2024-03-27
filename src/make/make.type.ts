//make/make.type.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MakeType {
    @Field()
    make_id: number;

    @Field()
    make_name: string;
}