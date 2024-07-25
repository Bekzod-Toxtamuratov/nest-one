import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { Company } from "./models/company.models";
import { UpdateCompanyDto } from "./dto/update-company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    getAllCompanies(): Promise<Company[]>;
    getCompanyById(id: number): Promise<Company>;
    getCompanyByName(name: string): Promise<Company>;
    deleteCompanyById(id: number): Promise<number | string>;
    updateCompanyById(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
