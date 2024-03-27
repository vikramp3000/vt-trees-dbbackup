// user.model.ts
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    })
    id: number;

    @Column({
    type: DataType.STRING,
    allowNull: false,
    })
    name: string;

    @Column({
    type: DataType.STRING,
    allowNull: false,
    })
    email: string;

    @Column({
    type: DataType.STRING,
    allowNull: false,
    })
    password: string;
}

/*The User model is a representation of your User entity in your database. 
It's used by your application to interact with the User table in the database. 
It defines the structure of a User record in the database and the relationships 
it might have with other tables.*/