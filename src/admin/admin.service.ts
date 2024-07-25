import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./models/admin.models";
import { ActivateAdminDto } from "./dto/activate_admin.dto";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly AdminRepo: typeof Admin) {}
  create(createAdminDto: CreateAdminDto) {
    return this.AdminRepo.create(createAdminDto);
  }

  findAll() {
    return this.AdminRepo.findAll();
  }

  async getADminByEmail(email: string): Promise<Admin> {
    return this.AdminRepo.findOne({ where: { email }, include: { all: true } });
  }

  async findOne(id: number) {
    const evetntData = await this.AdminRepo.findByPk(id);

    if (!evetntData) {
      throw new NotFoundException(`admin type with ID ${id} not found`);
    }
    return evetntData;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const [numberOfAffectedRows, [updatedADmin]] = await this.AdminRepo.update(
      updateAdminDto,
      {
        where: { id },
        returning: true,
      }
    );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`admin with ID ${id} not found`);
    }
    return updatedADmin;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.AdminRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `admin with ID ${id} was removed successfully.`;
      } else {
        return `admin with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing admin with ID ${id}: ${error.message}`);
    }
  }

  async activateUser(activateAdminDto: ActivateAdminDto) {
    const admin = await this.AdminRepo.findByPk(activateAdminDto.adminId);
    if (admin) {
      admin.is_active = false;
      await admin.save();
      return admin;
    }
    throw new NotFoundException("admin topilmadi");
  }
}
