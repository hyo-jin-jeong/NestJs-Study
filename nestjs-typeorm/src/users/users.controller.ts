import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('')
  getHello(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return this.usersService.create(userData);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() userData: UpdateUserDto) {
    return this.usersService.update(id, userData)
  }

  @Delete(':id')
  removeUserById(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}