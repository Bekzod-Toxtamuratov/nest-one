"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMachineDriverDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_machine_driver_dto_1 = require("./create-machine-driver.dto");
class UpdateMachineDriverDto extends (0, mapped_types_1.PartialType)(create_machine_driver_dto_1.CreateMachineDriverDto) {
}
exports.UpdateMachineDriverDto = UpdateMachineDriverDto;
//# sourceMappingURL=update-machine-driver.dto.js.map