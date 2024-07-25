import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { FileService } from "../file/file.service";
import { Posts } from "./models/post.models";
export declare class PostsService {
    private postRepo;
    private readonly fileService;
    constructor(postRepo: typeof Posts, fileService: FileService);
    create(createPostDto: CreatePostDto, image: any): Promise<Posts>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
