import { MachineDriverService } from './machine-driver.service';
import { CreateMachineDriverDto } from './dto/create-machine-driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine-driver.dto';
export declare class MachineDriverController {
    private readonly machineDriverService;
    constructor(machineDriverService: MachineDriverService);
    create(createMachineDriverDto: CreateMachineDriverDto): Promise<import("src/machine-driver/models/machine-driver.entity").MachineDriver>;
    findAll(): Promise<import("src/machine-driver/models/machine-driver.entity").MachineDriver[]>;
    findOne(id: string): string;
    update(id: string, updateMachineDriverDto: UpdateMachineDriverDto): string;
    remove(id: string): string;
}
