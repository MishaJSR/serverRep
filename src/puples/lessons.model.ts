
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface LessCreationAttr {
    idYear: number;
    idMonth: number;
    idStartDay: number;
    idEndDay: number;
    idDay: number;
    startTime: number;
    durationTime: number;
    subj: string;
    namePup: string;
    cost: number;
    every: boolean;
    isPayed: boolean;
}

@Table({tableName: 'lessons'})
export class Less extends Model<Less, LessCreationAttr>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idYear: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idMonth: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idStartDay: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idEndDay: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idDay: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    startTime: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    durationTime: number;

    @Column({type: DataType.STRING, allowNull: false})
    subj: string;

    @Column({type: DataType.STRING, allowNull: false})
    namePup: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    cost: number;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    every: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isPayed: boolean;

}