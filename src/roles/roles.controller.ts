import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { ApiTags } from "@nestjs/swagger";
import { CustomValidationPipe } from "../pipe/validation.pipe";
@ApiTags("Rollar ")
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @UsePipes(new CustomValidationPipe()) // faqat roles crud uchun iwlaydi;
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }

  @Get()
  getAllRoles() {
    return this.rolesService.getAllRoles();
  }

  @Get(":value")
  getAllRoleByValue(@Param("value") value: string) {
    return this.rolesService.getAllRoleByValue(value);
  }

  // @Get(":value")
  // findOne(@Param("value") id: string) {
  //   return this.rolesService.findOne(+id);
  // }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
