import { Model } from "sequelize-typescript";
import { User } from "../../user/models/user.models";
interface IRolesCreationAttr {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, IRolesCreationAttr> {
    id: number;
    value: string;
    description: string;
    users: User[];
}
export {};
