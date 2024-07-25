import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.models";
export declare class BuilderService {
    private readonly buildRepo;
    constructor(buildRepo: typeof Builder);
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    getAllBuilder(): Promise<Builder[]>;
    getBuilderById(id: number): Promise<Builder>;
    updateCompanyById(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
    deleteBuilderById(id: number): Promise<number>;
}
