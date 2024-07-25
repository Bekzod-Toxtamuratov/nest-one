import { Model } from "sequelize-typescript";
import { Company } from "../../company/models/company.models";
interface BuilderCreationAttr {
    full_name: string;
    birth_day: string;
    salary: number;
    companyId: number;
}
export declare class Builder extends Model<Builder, BuilderCreationAttr> {
    id: number;
    full_name: string;
    birth_day: string;
    salary: number;
    companyId: number;
    company: Company;
}
export {};
