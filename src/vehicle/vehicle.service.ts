import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.model';

import { User } from '../user/user.model';
import { Sequelize } from 'sequelize-typescript';
import { Make } from 'src/make/make.model';
import { Carmodel } from 'src/carmodel/carmodel.model';

@Injectable()
export class VehicleService {
constructor(
    @InjectModel(Vehicle)
    private vehicleModel: typeof Vehicle,
    ) {}

    //create vehicle injection
    async create(vehicle: { model_id: number; make_id: number; user_id: number; trim: string; year: number; miles: number; image: string; fuel_type: string }): Promise<Vehicle> {
    return this.vehicleModel.create(vehicle);
    }

    //get all vehicles
    async findAll(): Promise<Vehicle[]> {
    return Vehicle.findAll();
    }

    //get vehicle by id
    async findOne(vehicle_id: number): Promise<Vehicle> {
        return Vehicle.findOne({ where: { vehicle_id } });
    }

    ///get vehicles by user_id
    // async findByUserId(user_id: number): Promise<Vehicle[]> {
    //     return Vehicle.findAll({ where: { user_id } });
    // }
    async findByUserId(user_id: number): Promise<any[]> {
        return this.vehicleModel.findAll({
            where: { user_id },
            include: [
                {
                    model: Carmodel,
                    attributes: ['model_name'],
                },
                {
                    model: Make,
                    attributes: ['make_name'],
                },
            ],
            raw: true,
        });
    }


    //delete user
    async delete(vehicle_id: number): Promise<Vehicle> {
    const vehicle = await Vehicle.findOne({ where: { vehicle_id } });
    await Vehicle.destroy({ where: { vehicle_id } });
    return vehicle;
    }

    //update vehicle
    async update(vehicle_id: number, model_id: number, make_id: number, user_id: number, trim: string, year: number, miles: number, image: string, fuel_type: string): Promise<Vehicle> {
    const vehicle = await Vehicle.findOne({ where: { vehicle_id } });
    if (!vehicle) throw new NotFoundException('Vehicle not found');
    Object.assign(vehicle, { vehicle_id, model_id, make_id, user_id, trim, year, miles, image, fuel_type });
    await vehicle.save();
    return vehicle;
    }

    // async findAllUsers(): Promise<Vehicle[]> {
    //     return this.vehicleModel.findAll({
    //       attributes: {
    //         include: [
    //           [Sequelize.literal(`(SELECT user_name FROM users WHERE users.id = vehicle.user_id)`), 'user_name']
    //         ]
    //       },
    //       raw: true
    //     });
    //   }
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/