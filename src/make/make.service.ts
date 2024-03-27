import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { Make } from './make.model';

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
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/