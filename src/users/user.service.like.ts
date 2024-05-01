import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

    @Injectable()
    export class PostService {
    constructor(private prisma: PrismaService) {}

    async likePost(postId: string): Promise<void> {
        try {
        await this.prisma.post.update({
            where: { id: postId }, // Usar "_id" em vez de "id"
            data: { likes: { increment: 1 } },
        });
        console.log(`Post curtido com ID ${postId}`);
        } catch (error) {
        console.error('Erro curtindo post:', error);
        throw new Error('Falha ao curtir post');
        }
    }

    async unlikePost(postId: string): Promise<void> {
        try {
        await this.prisma.post.update({
            where: { id: postId }, // Usar "_id" em vez de "id"
            data: { likes: { decrement: 1 } },
        });
        console.log(`Post descurtido com ID ${postId}`);
        } catch (error) {
        console.error('Erro para descurtir post:', error);
        throw new Error('Falha ao descurtir post');
        }
    }
    }