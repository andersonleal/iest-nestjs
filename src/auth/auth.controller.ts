import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from '../util/public.metadata';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @Public()
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('/profile')
  @Roles('admin')
  @UseGuards(RolesGuard)
  profile(@Request() req) {
    return req.user;
  }
}
