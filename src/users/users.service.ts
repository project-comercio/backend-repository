import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { LikePostDto } from './dto/like-post.dto';
import { DislikePostDto } from './dto/dislike-post.dto';
import { Post } from 'src/posts/entities/post.entity';
import { UpdateUserDescriptionDto } from './dto/update-user-description.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.prisma.user.create({
        data: createUserDto,
      });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany();

      if (users) return users;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          uuid: id,
        },
      });

      if (user) return user;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const userUpdated = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: updateUserDto,
      });

      return userUpdated;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
      return;
    } catch (error) {
      console.log(error);
    }
  }

  async likePost(data: LikePostDto): Promise<void> {
    try {
      await this.prisma.post.update({
        where: {
          id: data.postId,
        },
        data: {
          likes: { increment: 1 },
        },
      });

      await this.prisma.user.update({
        where: {
          id: data.userId
        },
        data: {
          likes: {
            push: data.postId
          }
        }
      })
    } catch (error) {
      throw new Error(`Falha ao curtir post: ${error}`);
    }
  }

  async dislikePost(data: DislikePostDto): Promise<void> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: data.userId
        }
      })

      await this.prisma.post.update({
        where: {
          id: data.postId,
        },
        data: {
          likes: { decrement: 1 }
        },
      });

      await this.prisma.user.update({
        where: {
          id: data.userId
        },
        data: {
          likes: {
            set: user.likes.filter((postId) => postId !== data.postId)
          }
        }
      })
    } catch (error) {
      throw new Error(`Falha ao descurtir post: ${error}`);
    }
  }

  async getUserPosts(id: string): Promise<Post[]> {
    try {
      const userPosts = await this.prisma.post.findMany({
        where: {
          creatorId: id
        }
      })

      if (userPosts.length) {
        return userPosts
      }
    } catch (error) {
      console.log(error)
    }
  }

  async updateDescription(updateUserDescription: UpdateUserDescriptionDto): Promise<void> {
    try {
      await this.prisma.user.update({
        where: {
          id: updateUserDescription.userId
        },
        data: {
          description: updateUserDescription.description
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
