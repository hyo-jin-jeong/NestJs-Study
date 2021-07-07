import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(userData: CreateUserDto): Promise<User> {
    return this.usersRepository.save(userData);
  }

  async remove(id: number): Promise<void> {
    this.usersRepository.delete(id);
  }

  async update(id: number, userData: UpdateUserDto): Promise<UpdateUserDto> {
    const userResult = await this.usersRepository.update({ id: id }, userData)
    if (userResult['affected'] > 0) {
      return userData
    }
    return null
  }
}