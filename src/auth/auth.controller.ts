import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from '../util/public.metadata';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @Public()
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/signup')
  @Public()
  async signUp(@Body() user: User) {
    return await this.userService.create({
      ...user,
      role: user.role ?? 'USER',
    } as User);
  }

  @Get('/profile')
  @Roles('admin')
  @UseGuards(RolesGuard)
  profile(@Request() req) {
    return req.user;
  }
}
