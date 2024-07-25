import { Body, Controller, Get, Param, Post, Delete,Put } from "@nestjs/common";
import { MachineService } from "./machine.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { Machine } from "./models/machine.model";
import { UpdateMachineDto } from "./dto/update-machine.dto";

@Controller("machine")
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post("")
  async createMachine(
    @Body() createMachineDto: CreateMachineDto
  ): Promise<Machine> {
    console.log(createMachineDto);
    return this.machineService.createMachine(createMachineDto);
  }
  @Get()
  async getAllMachinies(): Promise<Machine[]> {
    return this.machineService.getAllMachinies();
  }
  @Get("/:id")
  async getMachineById(@Param("id") id: number): Promise<Machine> {
    return this.machineService.getMachiniesById(id);
  }
  @Get("name/:name")
  async getMachineByName(@Param("name") name: string): Promise<Machine> {
    return this.machineService.getMachiniesByName(name);
  }

  @Delete("/:id")
  async deleteMachineById(@Param("id") id: number): Promise<number | string> {
    const deleletedRows = await this.machineService.deleteMachineById(id);

    if (deleletedRows == 0) {
      return "Not found";
    }
     return deleletedRows;
  }
  @Put(":id")
  async updateMachineById(
    @Param("id") id: number,
    @Body() updateMachineDto: UpdateMachineDto
  ): Promise<Machine> {
       return this.machineService.updateMachineById(id,updateMachineDto)
  }
}
