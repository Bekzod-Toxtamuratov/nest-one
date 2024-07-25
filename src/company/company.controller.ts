import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { Company } from "./models/company.models";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post("")
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto
  ): Promise<Company> {
    console.log(createCompanyDto);
    return this.companyService.createCompany(createCompanyDto);
  }
  @Get()
  async getAllCompanies() {
    return this.companyService.getAllCompanies();
  }
  @Get(":id")
  async getCompanyById(@Param("id") id: number): Promise<Company> {
    return this.companyService.getCompanyById(id);
  }
  @Get("name/:name")
  async getCompanyByName(@Param("name") name: string): Promise<Company> {
    return this.companyService.getCompanyByName(name);
  }
  @Delete("/:id")
  async deleteCompanyById(@Param("id") id: number): Promise<number | string> {
    // return this.companyService.delteCompanyById(id);
    const deleleteRows = await this.companyService.deleteCompanyById(id);

    if (deleleteRows == 0) {
      return "Not found";
    }
    return deleleteRows;
  }

  @Put(":id")
  async updateCompanyById(
    @Param("id") id: number,
    @Body() updateCompanyDto: UpdateCompanyDto
  ) {
    return this.companyService.updateCompanyById(id, updateCompanyDto);
  }
}
