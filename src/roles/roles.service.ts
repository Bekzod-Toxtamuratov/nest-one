import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./models/role.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {}
  async createRole(createRoleDto: CreateRoleDto){
    return this.roleRepo.create(createRoleDto);
  }

  async getAllRoles() {
    return this.roleRepo.findAll({ include: { all: true } });
  }

  async getAllRoleByValue(value: string) {
    return this.roleRepo.findOne({ where: { value: value } });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
