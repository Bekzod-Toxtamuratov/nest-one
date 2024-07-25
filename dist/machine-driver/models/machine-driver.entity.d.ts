import { Model } from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
interface MachineDriverAttr {
    machineId: number;
    driverId: number;
}
export declare class MachineDriver extends Model<MachineDriver, MachineDriverAttr> {
    id: number;
    machineId: number;
    driverId: number;
    machine: Machine;
    driver: Machine;
}
export {};
