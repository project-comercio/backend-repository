import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto): Promise<void> {
    try {
      await this.prisma.comment.create({
        data: createCommentDto,
      });

      await this.prisma.post.update({
        where: {
          id: createCommentDto.postId
        },
        data: {
          comments: {
            increment: 1
          }
        }
      })
    } catch (error) {
      throw new Error("Não foi possível criar um comentário")
    }
  }

  async findAll(): Promise<Comment[]> {
    try {
      const comments = await this.prisma.comment.findMany()

      if (comments.length) return comments
    } catch (error) {
      throw new Error("Não foi possível encontrar comentários")
    }
  }

  async findOne(id: string): Promise<Comment> {
    try {
      const comment = await this.prisma.comment.findUnique({
        where: {
          id: id
        }
      })
      if (comment) return comment
    } catch (error) {
      throw new Error("Não foi possível encontrar esse comentário específico")
    }
  }

  async findPostComments(id: string): Promise<Comment[]> {
    try {
      const postComments = await this.prisma.comment.findMany({
         where: {
          postId: id
         }
      })
      if (postComments.length) return postComments
    } catch (error) {
      throw new Error("Não foi possível encontrar os comentários desse post")
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto): Promise<void> {
    try {
      await this
    } catch (error) {
      throw new Error("Não foi possível atualizar esse comentário")
    }
  }

  async remove(id: string): Promise<void> {
    try { 
      await this.prisma.comment.delete({
        where: {
          id: id
        }
      })
    } catch (error) {
      throw new Error("Não foi possível excluir esse comentário")
    }
  }
}
