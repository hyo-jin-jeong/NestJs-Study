import { Body, Controller, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }

    @Post()
    createPhoto(@Body() body : object,){
        const userId: number = body['userId'];
        const photoData: CreatePhotoDto = body['photoData'];
        this.photoService.create(photoData)
    }
}
