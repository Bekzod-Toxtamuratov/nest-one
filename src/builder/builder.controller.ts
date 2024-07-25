import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { BuilderService } from "./builder.service";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.models";

@Controller("builder")
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Post()
  async reateBuilder(@Body() createBuilderDto: CreateBuilderDto) {
    return this.builderService.createBuilder(createBuilderDto);
  }

  @Get()
  async getAllBuilder() {
    return this.builderService.getAllBuilder();
  }

  @Get(":id")
  async getBuilderById(@Param("id") id: number): Promise<Builder> {
    return this.builderService.getBuilderById(id);
  }

  @Put(":id")
  async updateCompanyById(
    @Param("id") id: number,
    @Body() updateBuilderDto: UpdateBuilderDto
  ) {
    return this.builderService.updateCompanyById(id, updateBuilderDto);
  }

  @Delete("/:id")
  async deleteBuilderById(@Param("id") id: number): Promise<number | string> {
    const deleleteRows = await this.builderService.deleteBuilderById(id);

    if (deleleteRows == 0) {
      return "Not found";
    }
    return deleleteRows;
  }
}
