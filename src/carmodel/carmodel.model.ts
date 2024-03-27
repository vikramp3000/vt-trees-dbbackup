// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Carmodel extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  model_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  make_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  offset_amount: number;
}