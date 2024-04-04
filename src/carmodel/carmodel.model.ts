// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Make } from 'src/make/make.model';
import { Vehicle } from 'src/vehicle/vehicle.model';

@Table
export class Carmodel extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  model_id: number;

  @ForeignKey(() => Make)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  make_id: number;

  @BelongsTo(() => Make)
  make: Make;

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