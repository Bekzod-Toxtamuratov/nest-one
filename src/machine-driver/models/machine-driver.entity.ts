import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
import { Driver } from "../../driver/models/driver.models";

interface MachineDriverAttr {
  machineId: number;
  driverId: number;
}

@Table({ tableName: "machine_driver", createdAt: false, updatedAt: false })
export class MachineDriver extends Model<MachineDriver, MachineDriverAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Machine)
  @Column({ type: DataType.INTEGER })
  machineId: number;

  @ForeignKey(() => Driver)
  @Column({ type: DataType.INTEGER })
  driverId: number;

  @BelongsTo(() => Machine)
  machine: Machine;

  @BelongsTo(() => Driver)
  driver: Machine;
}
