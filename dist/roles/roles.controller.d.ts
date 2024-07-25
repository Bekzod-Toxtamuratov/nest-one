import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    createRole(createRoleDto: CreateRoleDto): Promise<import("src/roles/models/role.model").Role>;
    getAllRoles(): Promise<import("src/roles/models/role.model").Role[]>;
    getAllRoleByValue(value: string): Promise<import("src/roles/models/role.model").Role>;
    update(id: string, updateRoleDto: UpdateRoleDto): string;
    remove(id: string): string;
}
