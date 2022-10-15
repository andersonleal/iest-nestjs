import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(userName: string, password: string) {
    const user = await this.authService.validateUser(userName, password);

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha invalido');
    }

    return user;
  }
}
