import { CreateDriverDto } from "./dto/create-driver.dto";
import { Driver } from "./models/driver.models";
import { UpdateDriverDto } from "./dto/update-driver.dto";
export declare class DriverService {
    private readonly driverRepo;
    constructor(driverRepo: typeof Driver);
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    getAllDriver(): Promise<Driver[]>;
    getDriverById(id: number): Promise<Driver>;
    updateDriverById(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver | string>;
    deleteDriverById(id: number): Promise<number>;
}
