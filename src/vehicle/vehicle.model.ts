// vehicle/vehicle.model.ts
import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Make } from 'src/make/make.model';
import { Carmodel } from 'src/carmodel/carmodel.model';
import { Purchase } from 'src/purchase/purchase.model';

@Table
export class Vehicle extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  vehicle_id: number;

  @ForeignKey(() => Carmodel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  model_id: number;

  @BelongsTo(() => Carmodel)
  carmodel: Carmodel;

  @ForeignKey(() => Make)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  make_id: number;

  @BelongsTo(() => Make)
  make: Make;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

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

  @HasMany(() => Purchase)
  purchases: Purchase[];
}