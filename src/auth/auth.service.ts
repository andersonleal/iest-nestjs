import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async login(user: User) {
    const payload = {
      userName: user.email,
      sub: user.id,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<User, 'id' | 'email'> | null> {
    const user = await this.userService.findOne(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}
