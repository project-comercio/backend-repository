import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDescription } from './dto/update-user-description';

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

  async upadteDescription(updateUserDescription: UpdateUserDescription): Promise<User> {
    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          id: updateUserDescription.userId
        },
        data: {
          description: updateUserDescription.description
        }
      })

      return updatedUser
    } catch (error) {
      console.log(error)
    }
  }
}
