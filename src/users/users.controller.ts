import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('id') id: number) {
    return await this.userService.findOneById(id);
  }

  @Put(':id')
  async update(@Body() user: User, @Param('id') id: number) {
    return await this.userService.update(id, user);
  }

  @Post()
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }
}
