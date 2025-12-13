import { Injectable } from "@nestjs/common";
import { CreateDriverDto } from "./dto/create-driver.dto";

import { InjectModel } from "@nestjs/sequelize";
import { Driver } from "./models/driver.models";
import { UpdateDriverDto } from "./dto/update-driver.dto";

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver) private readonly driverRepo: typeof Driver
  ) {}

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    return this.driverRepo.create(createDriverDto);
  }

  async getAllDriver(): Promise<Driver[]> {
    return this.driverRepo.findAll({include: {all: true}});
  }

  async getDriverById(id: number): Promise<Driver> {
    return await this.driverRepo.findOne({ where: { id } });
  }

  async updateDriverById(
    id: number,
    updateDriverDto: UpdateDriverDto
  ): Promise<Driver | string> {
    // console.log("ok");

    console.log(updateDriverDto, "updateDriverDto");
    const data = await this.driverRepo.update(updateDriverDto, {
      where: { id: id },
      returning: true,
    });

    // console.log(data);
    
    return "dad";
  }

  async deleteDriverById(id: number): Promise<number> {
    return this.driverRepo.destroy({ where: { id } });
  }
}
