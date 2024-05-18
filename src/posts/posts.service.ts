import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    try {
      const newPost = await this.prisma.post.create({
        data: createPostDto,
      });
      return newPost;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(): Promise<Post[]> {
    try {
      const posts = await this.prisma.post.findMany();

      if (posts) return posts;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string): Promise<Post> {
    try {
      const post = await this.prisma.post.findUnique({
        where: {
          id: id,
        },
      });

      if (post) return post;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    try {
      const updatedPost = await this.prisma.post.update({
        where: {
          id: id,
        },
        data: updatePostDto,
      });

      return updatedPost;
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.post.delete({
        where: {
          id: id,
        },
      });
      return;
    } catch (error) {
      console.error(error);
    }
  }
}
