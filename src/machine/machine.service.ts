import { Injectable } from "@nestjs/common";
import { Machine } from "./models/machine.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(Machine) private readonly machineRepo: typeof Machine
  ) {}

  async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
    // return this.machineRepo.create(CreateMachineDto)
    const machine = await this.machineRepo.create(createMachineDto);
    return machine;
  }
  async getAllMachinies(): Promise<Machine[]> {
    return this.machineRepo.findAll({ include: { all: true } });
  }
  async getMachiniesById(id: number): Promise<Machine> {
    return this.machineRepo.findByPk(id);
  }
  async getMachiniesByName(name: string): Promise<Machine> {
    return this.machineRepo.findOne({ where: { name } });
  }
  async deleteMachineById(id: number): Promise<number> {
    return this.machineRepo.destroy({ where: { id } });
  }
  async updateMachineById(
    id: number,
    updateMachineDto: UpdateMachineDto
  ): Promise<Machine> {
    const machine = await this.machineRepo.update(updateMachineDto, {
      where: { id },
      returning: true,
    });
    console.log("machine ::  ", machine[1][0]);
    return machine[1][0];
  }
}
