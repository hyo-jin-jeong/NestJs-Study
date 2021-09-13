import { IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export class CreatePhotoDto {
  @IsString()
  url: string;

  @IsNumber()
  user: User;
}
