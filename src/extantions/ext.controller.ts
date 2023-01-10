import { ExtService } from './ext.service';
import { deleteExtDto } from './dto/delete.ext.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createExtDto } from './dto/create.ext.dto';


@Controller('extentions')
export class ExtController {
    constructor(private extService: ExtService) {}

    @Post()
    createUserInfo(@Body() userDto: createExtDto){
        return this.extService.createLess(userDto)
    }

    @Post('/delete')
    deleteUserInfo(@Body() deleteDto: deleteExtDto){
        return this.extService.deleteLess(deleteDto)
    }

    @Get()
    getAllInfo() {
        return this.extService.getAllLess()
    }

    @Get('/:id')
    getByValue(@Param('id') id: number) {
        return this.extService.getLessById(id);
    }
}