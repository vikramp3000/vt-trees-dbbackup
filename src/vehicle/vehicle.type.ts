// vehicle/vehicle.type.ts
import { Field, ObjectType,Int } from '@nestjs/graphql';
import { CarmodelType } from 'src/carmodel/carmodel.type';
import { MakeType } from 'src/make/make.type';

@ObjectType()
export class VehicleType {
    @Field(type => Int)
    vehicle_id: number;

    @Field(type => Int)
    model_id: number;

    @Field(type => Int)
    make_id: number;

    @Field(type => Int)
    user_id: number;

    @Field()
    trim: string;

    @Field(type => Int)
    year: number;

    @Field(type => Int)
    miles: number;

    @Field()
    image: string;

    @Field()
    fuel_type: string;

    // @Field(() => CarmodelType)
    // model: CarmodelType;
  
    // @Field(() => MakeType)
    // make: MakeType;

    
}