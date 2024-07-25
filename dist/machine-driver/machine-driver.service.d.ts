import { CreateMachineDriverDto } from "./dto/create-machine-driver.dto";
import { UpdateMachineDriverDto } from "./dto/update-machine-driver.dto";
import { MachineDriver } from "./models/machine-driver.entity";
export declare class MachineDriverService {
    private readonly machine_driverRepo;
    constructor(machine_driverRepo: typeof MachineDriver);
    create(createMachineDriverDto: CreateMachineDriverDto): Promise<MachineDriver>;
    findAll(): Promise<MachineDriver[]>;
    findOne(id: number): string;
    update(id: number, updateMachineDriverDto: UpdateMachineDriverDto): string;
    remove(id: number): string;
}
