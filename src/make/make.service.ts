import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { Make } from './make.model';

import { Carmodel } from 'src/carmodel/carmodel.model';
import { Vehicle } from 'src/vehicle/vehicle.model';
import { Purchase } from 'src/purchase/purchase.model';
import { Sequelize } from 'sequelize-typescript';


@Injectable()
export class MakeService {
constructor(
    @InjectModel(Make)
    private makeModel: typeof Make,
    ) {}

    //create make injection
    async create(make: { make_name: string }): Promise<Make> {
    return this.makeModel.create(make);
    }

    //get all 
    async findAll(): Promise<Make[]> {
    return Make.findAll();
    }

    // //get  by id
    async findOne(make_id: number): Promise<Make> {
        return Make.findOne({ where: { make_id } });
    }

    // //delete 
    async delete(make_id: number): Promise<Make> {
    const make = await Make.findOne({ where: { make_id } });
    await Make.destroy({ where: { make_id } });
    return make;
    }

    //update make
    async update(make_id: number, make_name: string): Promise<Make> {
    const make = await Make.findOne({ where: { make_id } });
    if (!make) throw new NotFoundException('Make not found');
    Object.assign(make, { make_id, make_name });
    await make.save();
    return make;
    }

    //get models by make
    async findModelsByMake(makeName: string): Promise<Carmodel[]> {
        const make = await this.makeModel.findOne({
          where: { make_name: makeName },
        });
      
        if (!make) {
          throw new NotFoundException(`Make with name ${makeName} not found`);
        }
      
        return Carmodel.findAll({
          where: { make_id: make.make_id },
        });
      }
    
    //get total trees by make and model - for leaderboard 
    async findAllMakesAndModels(): Promise<any[]> {
    return Vehicle.findAll({
        attributes: [
        [Sequelize.col('make.make_name'), 'make_name'],
        [Sequelize.col('carmodel.model_name'), 'model_name'],
        [Sequelize.fn('sum', Sequelize.col('purchases.number_of_trees')), 'total_trees']
        ],
        include: [
        {
            model: Make,
            attributes: [],
        },
        {
            model: Carmodel,
            attributes: [],
        },
        {
            model: Purchase,
            attributes: [],
        },
        ],
        group: ['make.make_name', 'carmodel.model_name'],
        raw: true,
    });
    }

    // get total trees by make and model - for search
    async findMakesAndModelsBySearch(make_name?: string, model_name?: string): Promise<any[]> {
        const whereClause = {};
        if (make_name) {
          whereClause['$vehicle.make.make_name$'] = make_name;
        }
        if (model_name) {
          whereClause['$vehicle.carmodel.model_name$'] = model_name;
        }
      
        return Purchase.findAll({
          attributes: [
            [Sequelize.fn('COALESCE', Sequelize.col('vehicle.make.make_name'), ''), 'make_name'],
            [Sequelize.fn('COALESCE', Sequelize.col('vehicle.carmodel.model_name'), ''), 'model_name'],
            [Sequelize.fn('sum', Sequelize.col('number_of_trees')), 'total_trees']
          ],
          include: [{
            model: Vehicle,
            attributes: [],
            include: [
              {
                model: Make,
                attributes: [],
              },
              {
                model: Carmodel,
                attributes: [],
              },
            ],
          }],
          where: whereClause,
          group: ['vehicle.make.make_name', 'vehicle.carmodel.model_name'],
          raw: true,
        });
      }

    //get all makes with models - used by update ratio
    async findAllMakesWithModels(): Promise<Make[]> {
        return this.makeModel.findAll({
          include: [
            {
              model: Carmodel,
              as: 'carmodels',
              attributes: ['model_id', 'model_name', 'offset_amount'],
            },
          ],
        });
      }



}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/