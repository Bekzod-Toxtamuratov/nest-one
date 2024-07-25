import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { addRoleDto } from "./dto/add-tole.dto";
import { ActivateUserDto } from "./dto/activity-user.dto";
import { User } from "./models/user.models";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<string>;
    addRole(addRoleDto: addRoleDto): Promise<User>;
    removeRole(addRoleDto: addRoleDto): Promise<User>;
    activateUser(activateUserDto: ActivateUserDto): Promise<User>;
}
