import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { DriverService } from "./driver.service";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.models";

@Controller("driver")
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post("")
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driverService.getAllDriver();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.driverService.getDriverById(+id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateDriverDto: UpdateDriverDto) {
  //   return this.driverService.updateDiriverById(+id, updateDriverDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.driverService.deleteDriverById(+id);
  }

  @Put(":id")
  async updateDriverById(
    @Param("id") id: number,
    @Body() updateDriverDto: UpdateDriverDto
  ) {
       return this.driverService.updateDriverById(id, updateDriverDto);
  }
  
}
