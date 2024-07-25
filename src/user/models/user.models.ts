import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "../../roles/models/user_role.model";
import { Role } from "../../roles/models/role.model";
import { ApiProperty } from "@nestjs/swagger";
import { Posts } from "../../posts/models/post.models";

interface IUserCreationAttr {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({ example: 1, description: "foydalunuvchi unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: true, description: "foydalunuvchi  nomi " })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "foydalunuvchi  emaili ",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: "password12345",
    description: "foydalunuvchi  password ",
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: "true | false",
    description: "foydalunuvchi  is_active false | true ",
  })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Posts)
  posts: Posts[];
}
