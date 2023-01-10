import { deleteExtDto } from './dto/delete.ext.dto';
import { createExtDto } from './dto/create.ext.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ext} from './ext.model';

@Injectable()
export class ExtService {
    constructor(@InjectModel(Ext) private extRepository: typeof Ext){

    }

    async createExt(dto: createExtDto){
        const follow = await this.extRepository.create(dto);
        return follow;
    }

    async deleteExt(dto: deleteExtDto){
        const follow = await this.extRepository.destroy({
            where: {
                idYear: dto.idYear,
                idMonth: dto.idMonth,
                idStartDayWeek: dto.idStartDayWeek,
                idDay: dto.idDay,
                startTime: dto.startTime
            }
        });
        return follow;
    }

    

    async getAllExt(){
        const follow = await this.extRepository.findAll({include: {all: true}});
        return follow;
    }


    async createHome(dto: createExtDto) {
        let newExt;
        const ext = await this.extRepository.findOne({ 
            where: { 
                idYear: dto.idYear,  idMonth: dto.idMonth,
                idStartDayWeek: dto.idStartDayWeek,
                idDay: dto.idDay,
                startTime: dto.startTime
            } })
        if (ext) {
            ext.homework = dto.homework;
            await ext.save();
            return ext
        }
        else {
            newExt = await this.extRepository.create(dto);
            return newExt
        }
    }

    async createPay(dto: createExtDto) {
        let newExt;
        const ext = await this.extRepository.findOne({ 
            where: { 
                idYear: dto.idYear,  idMonth: dto.idMonth,
                idStartDayWeek: dto.idStartDayWeek,
                idDay: dto.idDay,
                startTime: dto.startTime
            } })
        if (ext) {
            ext.isPayed = dto.isPayed;
            await ext.save();
            return ext
        }
        else {
            newExt = await this.extRepository.create(dto);
            return newExt
        }
        
    }


}



