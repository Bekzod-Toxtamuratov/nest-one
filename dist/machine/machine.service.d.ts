import { Machine } from "./models/machine.model";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
export declare class MachineService {
    private readonly machineRepo;
    constructor(machineRepo: typeof Machine);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    getAllMachinies(): Promise<Machine[]>;
    getMachiniesById(id: number): Promise<Machine>;
    getMachiniesByName(name: string): Promise<Machine>;
    deleteMachineById(id: number): Promise<number>;
    updateMachineById(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
