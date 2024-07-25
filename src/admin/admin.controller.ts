import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Admin } from "./models/admin.models";
import { JwtAdminGuard } from "../guards/admin.auth.guard";
import { AdminGuard } from "../guards/self-admin.guard";
import { ActivateAdminDto } from "./dto/activate_admin.dto";

@Controller("admin")
@ApiTags("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "create admin" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
    type: Admin,
  })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "get ALL admin" })
  @ApiResponse({
    status: 200,
    description: "",
    type: [Admin],
  })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "get byId admin" })
  @ApiResponse({
    status: 200,
    description: "",
    type: [Admin],
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtAdminGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "update admin" })
  @ApiResponse({
    status: 200,
    description: "",
    type: [Admin],
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "delete admin" })
  @ApiResponse({
    status: 200,
    description: "",
    type: [Admin],
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }

  @HttpCode(200)
  @Post("activate")
  async activateUser(@Body() activateAdminDto: ActivateAdminDto) {
    return this.adminService.activateUser(activateAdminDto);
  }
}
