import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LikePostDto } from './dto/like-post.dto';
import { DislikePostDto } from './dto/dislike-post.dto';

  @Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Post("/likePost")
  likePost(@Body() likePostDto: LikePostDto) {
    return this.usersService.likePost(likePostDto)
  }

  @Post("/dilikePost")
  dislikePost(@Body() likePostDto: DislikePostDto) {
    return this.usersService.dislikePost(likePostDto)
  }
}
