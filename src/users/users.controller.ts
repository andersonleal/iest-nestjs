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
    const userResponse = await this.userService.findAll();
    return userResponse;
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('id') id: number) {
    const userResponse = await this.userService.findOneById(id);
    return userResponse;
  }

  @Put(':id')
  async update(@Body() user: User, @Param('id') id: number) {
    const userResponse = await this.userService.update(id, user);
    return userResponse;
  }

  @Post()
  async create(@Body() user: User) {
    const userResponse = await this.userService.create(user);
    return userResponse;
  }
}
