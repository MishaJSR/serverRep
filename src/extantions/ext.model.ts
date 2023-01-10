
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ExtCreationAttr {
    idYear: number;
    idMonth: number;
    idStartDayWeek: number;
    idDay: number;
    startTime: number;
    durationTime: number;
    subj: string;
    namePup: string;
    cost: number;
    homework: string;
    isPayed: boolean;
    isDecayed: boolean;
}

@Table({tableName: 'ext'})
export class Ext extends Model<Ext, ExtCreationAttr>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idYear: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idMonth: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    idStartDayWeek: number;

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

    @Column({type: DataType.STRING, allowNull: false})
    homework: string;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isPayed: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isDecayed: boolean;

}