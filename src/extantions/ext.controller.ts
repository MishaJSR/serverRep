import { ExtService } from './ext.service';
import { deleteExtDto } from './dto/delete.ext.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createExtDto } from './dto/create.ext.dto';


@Controller('extentions')
export class ExtController {
    constructor(private extService: ExtService) {}

    @Post()
    createUserInfo(@Body() userDto: createExtDto){
        return this.extService.createExt(userDto)
    }

    @Post('/homework')
    createHomework(@Body() createHomeDto: createExtDto){
        return this.extService.createHome(createHomeDto)
    }

    @Post('/payed')
    createPayed(@Body() createPayDto: createExtDto){
        return this.extService.createPay(createPayDto)
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