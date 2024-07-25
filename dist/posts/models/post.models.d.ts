import { Model } from "sequelize-typescript";
import { User } from "../../user/models/user.models";
interface IPostCreationAttr {
    title: string;
    content: string;
    image: string;
    userId: number;
}
export declare class Posts extends Model<Posts, IPostCreationAttr> {
    id: number;
    title: string;
    content: string;
    image: string;
    userId: number;
    author: User;
}
export {};
