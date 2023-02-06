import { createReductByIdtDto } from './dto/create.reductById.dto';
import { createGetWeekDto } from './dto/create.getWeek.dto';
import { ExtService } from './ext.service';
import { deleteExtDto } from './dto/delete.ext.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createExtDto } from './dto/create.ext.dto';
import { createDecDto } from './dto/create.decay.dto';
import { createCheckIsReadDto } from './dto/create.checkIsRead.dto';


@Controller('extentions')
export class ExtController {
    constructor(private extService: ExtService) {}

    @Post()
    createUserInfo(@Body() userDto: createExtDto){
        return this.extService.createExt(userDto)
    }

    @Post('/getWeek')
    getWeek(@Body() createWeekDto: createGetWeekDto){
        return this.extService.getWeek(createWeekDto)
    }

    @Post('/decayID')
    decayById(@Body() createWeekDto: createDecDto){
        return this.extService.decayById(createWeekDto)
    }

    @Post('/getWeekDecayed')
    getWeekDec(@Body() createWeekDto: createGetWeekDto){
        return this.extService.getWeekDec(createWeekDto)
    }

    @Post('/reduct')
    createReduct(@Body() createRedDto: createExtDto){
        return this.extService.createReduct(createRedDto)
    }

    @Post('/reductByID')
    createReductById(@Body() createRedDto: createReductByIdtDto){
        return this.extService.createReductById(createRedDto)
    }

    @Post('/checkIsRead')
    checkIsRead(@Body() createRedDto: createCheckIsReadDto){
        return this.extService.checkIsRead(createRedDto)
    }

    

    


    @Post('/delete')
    deleteUserInfo(@Body() deleteDto: deleteExtDto){
        return this.extService.deleteExt(deleteDto)
    }

    @Get()
    getAllInfo() {
        return this.extService.getAllExt()
    }

}