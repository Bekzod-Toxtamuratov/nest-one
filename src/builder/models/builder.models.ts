import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Company } from "../../company/models/company.models";

interface BuilderCreationAttr {
  full_name: string;
  birth_day: string;
  salary: number;
  companyId: number;
}

@Table({ tableName: "builder" })
export class Builder extends Model<Builder, BuilderCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
  })
  birth_day: string;

  @Column({
    type: DataType.INTEGER,
  })
  salary: number;


  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;
}
