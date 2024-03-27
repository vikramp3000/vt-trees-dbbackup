import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { Carmodel } from './carmodel.model';

@Injectable()
export class CarmodelService {
constructor(
    @InjectModel(Carmodel)
    private carmodelModel: typeof Carmodel,
    ) {}

    //create make injection
    async create(model: { make_id: number, model_name: string, offset_amount: number }): Promise<Carmodel> {
    return this.carmodelModel.create(model);
    }

    // //get all 
    async findAll(): Promise<Carmodel[]> {
    return Carmodel.findAll();
    }

    // //get  by id
    async findOne(model_id: number): Promise<Carmodel> {
        return Carmodel.findOne({ where: { model_id } });
    }

    // //delete 
    async delete(model_id: number): Promise<Carmodel> {
    const model = await Carmodel.findOne({ where: { model_id } });
    await Carmodel.destroy({ where: { model_id } });
    return model;
    }

    // //update 
    async update(model_id: number, make_id: number, model_name: string, offset_amount: number): Promise<Carmodel> {
    const model = await Carmodel.findOne({ where: { model_id } });
    if (!model) throw new NotFoundException('model not found');
    Object.assign(model, { model_id, make_id, model_name, offset_amount });
    await model.save();
    return model;
    }
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/