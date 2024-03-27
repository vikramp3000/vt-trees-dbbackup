// vehicle/vehicle.type.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VehicleType {
    @Field()
    vehicle_id: number;

    @Field()
    model_id: number;

    @Field()
    make_id: number;

    @Field()
    user_id: number;

    @Field()
    trim: string;

    @Field()
    year: number;

    @Field()
    miles: number;

    @Field()
    image: string;

    @Field()
    fuel_type: string;
}