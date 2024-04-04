import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Vehicle } from 'src/vehicle/vehicle.model';

@Table
export class Purchase extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  purchase_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Vehicle)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vehicle_id: number;

  @BelongsTo(() => Vehicle)
  vehicle: Vehicle;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number_of_trees: number;
}