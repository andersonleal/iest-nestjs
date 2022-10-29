import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User) {
    return this.userRepository.save(user);
  }

  async findOneById(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findAll() {
    return this.userRepository.find();
  }

  async update(id: number, user: User) {
    return this.userRepository.update(id, user);
  }
}
