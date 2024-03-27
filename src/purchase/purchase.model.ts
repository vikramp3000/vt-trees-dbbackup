// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Purchase extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  purchase_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vehicle_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number_of_trees: number;
}