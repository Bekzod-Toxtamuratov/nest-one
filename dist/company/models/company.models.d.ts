import { Model } from "sequelize-typescript";
interface CompanyCreationAttr {
    name: string;
    address: string;
    phone: string;
}
export declare class Company extends Model<Company, CompanyCreationAttr> {
    id: number;
    name: string;
    address: string;
    phone: string;
}
export {};
