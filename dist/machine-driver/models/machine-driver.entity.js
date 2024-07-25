"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineDriver = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const machine_model_1 = require("../../machine/models/machine.model");
const driver_models_1 = require("../../driver/models/driver.models");
let MachineDriver = class MachineDriver extends sequelize_typescript_1.Model {
};
exports.MachineDriver = MachineDriver;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], MachineDriver.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => machine_model_1.Machine),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MachineDriver.prototype, "machineId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => driver_models_1.Driver),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MachineDriver.prototype, "driverId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => machine_model_1.Machine),
    __metadata("design:type", machine_model_1.Machine)
], MachineDriver.prototype, "machine", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => driver_models_1.Driver),
    __metadata("design:type", machine_model_1.Machine)
], MachineDriver.prototype, "driver", void 0);
exports.MachineDriver = MachineDriver = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "machine_driver", createdAt: false, updatedAt: false })
], MachineDriver);
//# sourceMappingURL=machine-driver.entity.js.map