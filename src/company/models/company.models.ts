import { Column, Model, Table, DataType } from "sequelize-typescript";

interface CompanyCreationAttr {
  name: string;
  address: string;
  phone: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  //  *********

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    // unique: true,
  })
  name: string;

  //  *********
  @Column({
    type: DataType.STRING,
  })
  address: string;
  //  *********
  @Column({
    type: DataType.STRING,
  })
  phone: string;
}
