// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Carmodel } from '../carmodel/carmodel.model';

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

  @HasMany(() => Carmodel)
  carmodels: Carmodel[];
}