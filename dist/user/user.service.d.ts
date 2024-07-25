import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./models/user.models";
import { RolesService } from "../roles/roles.service";
import { addRoleDto } from "./dto/add-tole.dto";
import { ActivateUserDto } from "./dto/activity-user.dto";
export declare class UserService {
    private readonly UserRepo;
    private readonly rolesService;
    constructor(UserRepo: typeof User, rolesService: RolesService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<string>;
    addRole(addRoleDto: addRoleDto): Promise<User>;
    removeRole(addRoleDto: addRoleDto): Promise<User>;
    activateUser(activateUserDto: ActivateUserDto): Promise<User>;
}
