import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IAdminCreationAttr {
  name: string;
  login: string;
  password: string;
  is_activate: boolean;
  is_creator: boolean;
  hashed_refresh_token: string;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @ApiProperty({ example: 1, description: "admini unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: true, description: "admin  nomi " })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: "login example",
    description: " login  description",
  })
  @Column({
    type: DataType.STRING(100),
    //     allowNull: false,
    //     unique: true,
  })
  login: string;

  @ApiProperty({
    example: "password example",
    description: "password  description",
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: "true | false",
    description: "admin  is_activate false | true ",
  })
  @Column({
    type: DataType.STRING,
    // defaultValue: true,
  })
  is_active: boolean;

  @ApiProperty({
    example: "true | false",
    description: "is_creator  false | true",
  })
  @Column({
    type: DataType.STRING,
  })
  is_creator: boolean;

  @ApiProperty({
    example: "hashed_refresh_token example ",
    description: "hashed_refresh_token description",
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @ApiProperty({
    example: "email example ",
    description: "email description",
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;
}
