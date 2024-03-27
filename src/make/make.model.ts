// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Make extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  make_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  make_name: string;
}