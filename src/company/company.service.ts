import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/company.models";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company) private readonly companyRepo: typeof Company
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>{
    return this.companyRepo.create(createCompanyDto);
    // const company = await this.companyRepo.create(createCompanyDto);
    //  return company;
  }

  async getAllCompanies(): Promise<Company[]> {
    return this.companyRepo.findAll();
  }
  async getCompanyById(id: number): Promise<Company> {
    return await this.companyRepo.findOne({ where: { id } });
  }
  async getCompanyByName(name: string): Promise<Company> {
    return await this.companyRepo.findOne({ where: { name } });
  }
  async deleteCompanyById(id: number): Promise<number> {
    return this.companyRepo.destroy({ where: { id } });
  }

  async updateCompanyById(
    id: number,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<Company> {
    const company = await this.companyRepo.update(updateCompanyDto, {
      where: { id },
      returning: true,
    });
    console.log(company[1]);
    return company[1][0];
  }
}
