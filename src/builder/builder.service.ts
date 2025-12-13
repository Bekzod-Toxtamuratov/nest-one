import { Injectable } from "@nestjs/common";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.models";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class BuilderService {
  constructor(
    @InjectModel(Builder) private readonly buildRepo: typeof Builder
  ) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    return this.buildRepo.create(createBuilderDto);
  }

  async getAllBuilder(): Promise<Builder[]> {
    return this.buildRepo.findAll({include:{all:true}});
  }

  async getBuilderById(id: number): Promise<Builder> {
    return await this.buildRepo.findOne({ where: { id } });
  }

  async updateCompanyById(
    id: number,
    updateBuilderDto: UpdateBuilderDto
  ): Promise<Builder> {
    const builder = await this.buildRepo.update(updateBuilderDto, {
      where: { id },
      returning: true,
    });
    // console.log(builder[1]);

    return builder[1][0];
  }

  async deleteBuilderById(id: number): Promise<number> {
    return this.buildRepo.destroy({ where: { id } });
  }
}
