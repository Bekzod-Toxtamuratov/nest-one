import { Injectable } from "@nestjs/common";
import { CreateMachineDriverDto } from "./dto/create-machine-driver.dto";
import { UpdateMachineDriverDto } from "./dto/update-machine-driver.dto";
import { MachineDriver } from "./models/machine-driver.entity";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class MachineDriverService {
  constructor(
    @InjectModel(MachineDriver)
    private readonly machine_driverRepo: typeof MachineDriver
  ) {}

  create(createMachineDriverDto: CreateMachineDriverDto) {
    return this.machine_driverRepo.create(createMachineDriverDto);
  }

  findAll() {
    return this.machine_driverRepo.findAll({include:{all:true}});;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineDriver`;
  }

  update(id: number, updateMachineDriverDto: UpdateMachineDriverDto) {
    return `This action updates a #${id} machineDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineDriver`;
  }
}
