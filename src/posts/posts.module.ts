import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Posts } from "./models/post.models";
import { User } from "../user/models/user.models";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Posts, User]),
   FileModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
