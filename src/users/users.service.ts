import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });

    return newUser;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    if (users) return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user) return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userUpdated = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });

    return userUpdated;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return;
  }
}
