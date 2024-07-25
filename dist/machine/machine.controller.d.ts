import { MachineService } from "./machine.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { Machine } from "./models/machine.model";
import { UpdateMachineDto } from "./dto/update-machine.dto";
export declare class MachineController {
    private readonly machineService;
    constructor(machineService: MachineService);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    getAllMachinies(): Promise<Machine[]>;
    getMachineById(id: number): Promise<Machine>;
    getMachineByName(name: string): Promise<Machine>;
    deleteMachineById(id: number): Promise<number | string>;
    updateMachineById(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
