import { LessonsService } from './lessons.service';
import { deleteLessDto } from './dto/delete.lesson.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createLessDto } from './dto/create.lesson.dto';


@Controller('lessons')
export class LessonsController {
    constructor(private lessonsService: LessonsService) {}

    @Post()
    createUserInfo(@Body() userDto: createLessDto){
        return this.lessonsService.createLess(userDto)
    }

    @Post('/delete')
    deleteUserInfo(@Body() deleteDto: deleteLessDto){
        return this.lessonsService.deleteLess(deleteDto)
    }

    @Get()
    getAllInfo() {
        return this.lessonsService.getAllLess()
    }

    @Get('/:id')
    getByValue(@Param('id') id: number) {
        return this.lessonsService.getLessById(id);
    }
}