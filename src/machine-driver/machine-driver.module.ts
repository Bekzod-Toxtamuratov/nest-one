import { Module } from '@nestjs/common';
import { MachineDriverService } from './machine-driver.service';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine-driver.entity';
import { MachineDriverController } from './machine-driver.controller';

@Module({
  imports:[SequelizeModule.forFeature([MachineDriver])],
  controllers: [MachineDriverController],
  providers: [MachineDriverService],
})
export class MachineDriverModule {}
