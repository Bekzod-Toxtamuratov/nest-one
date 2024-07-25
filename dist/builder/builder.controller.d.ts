import { BuilderService } from "./builder.service";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.models";
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    reateBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    getAllBuilder(): Promise<Builder[]>;
    getBuilderById(id: number): Promise<Builder>;
    updateCompanyById(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
    deleteBuilderById(id: number): Promise<number | string>;
}
