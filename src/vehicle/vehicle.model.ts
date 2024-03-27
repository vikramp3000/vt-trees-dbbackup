// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Vehicle extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  vehicle_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  model_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  make_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  trim: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  miles: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fuel_type: string;
}