import { Company } from "./models/company.models";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
export declare class CompanyService {
    private readonly companyRepo;
    constructor(companyRepo: typeof Company);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    getAllCompanies(): Promise<Company[]>;
    getCompanyById(id: number): Promise<Company>;
    getCompanyByName(name: string): Promise<Company>;
    deleteCompanyById(id: number): Promise<number>;
    updateCompanyById(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
