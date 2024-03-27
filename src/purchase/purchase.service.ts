import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { Purchase } from './purchase.model';

@Injectable()
export class PurchaseService {
constructor(
    @InjectModel(Purchase)
    private purchaseModel: typeof Purchase,
    ) {}

    //create purchase injection
    async create(purchase: { user_id: number, vehicle_id: number, number_of_trees: number }): Promise<Purchase> {
    return this.purchaseModel.create(purchase);
    }

    // //get all 
    async findAll(): Promise<Purchase[]> {
    return Purchase.findAll();
    }

    // //get  by id
    async findOne(purchase_id: number): Promise<Purchase> {
        return Purchase.findOne({ where: { purchase_id } });
    }

    // //delete 
    async delete(purchase_id: number): Promise<Purchase> {
    const purchase = await Purchase.findOne({ where: { purchase_id } });
    await Purchase.destroy({ where: { purchase_id } });
    return purchase;
    }

    // //update 
    async update(purchase_id: number, user_id: number, vehicle_id: number, number_of_trees: number): Promise<Purchase> {
    const purchase = await Purchase.findOne({ where: { purchase_id } });
    if (!purchase) throw new NotFoundException('Purchase not found');
    Object.assign(purchase, { purchase_id, user_id, vehicle_id, number_of_trees });
    await purchase.save();
    return purchase;
    }
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/