import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.models";
import { UserRoles } from "./user_role.model";

interface IRolesCreationAttr {

  value: string;
  description: string;
  
}
@Table({ tableName: "roles" })
export class Role extends Model<Role, IRolesCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  value: string;
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
