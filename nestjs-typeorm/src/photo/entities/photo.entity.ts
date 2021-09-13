import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(type => User, user => user.photoes)
  user: User;
}
