import { DriverService } from "./driver.service";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.models";
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    create(createDriverDto: CreateDriverDto): Promise<Driver>;
    findAll(): Promise<Driver[]>;
    findOne(id: string): Promise<Driver>;
    remove(id: string): Promise<number>;
    updateDriverById(id: number, updateDriverDto: UpdateDriverDto): Promise<string | Driver>;
}
