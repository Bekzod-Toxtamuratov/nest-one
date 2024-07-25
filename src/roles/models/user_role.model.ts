import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.models";
import { Role } from "./role.model";

interface IUserRolesCreationAttr {
  userId: number;
  roleId: number;
}
@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles, IUserRolesCreationAttr> {

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;

}
