import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto{
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  isActive: boolean;
}
