import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PhotoModule
  ],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule {}
