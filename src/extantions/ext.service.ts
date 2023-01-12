import { createGetWeekDto } from './dto/create.getWeek.dto';
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

    async getWeek(dto: createGetWeekDto){
        const ext = await this.extRepository.findAll({
            where: {
                idYear: dto.idYear,
                idMonth: dto.idMonth,
                idStartDayWeek: dto.idStartDayWeek,
                isDecayed: false
                
            }
        });
        return ext;
    }

    

    async createReduct(dto: createExtDto) {
        let newExt;
            newExt = await this.extRepository.findOne({ 
                where: { 
                    idYear: dto.idYear,  
                    idMonth: dto.idMonth,
                    idStartDayWeek: dto.idStartDayWeek,
                    idDay: dto.idDay,
                    startTime: dto.startTime
                } })
                if (newExt) {
                    newExt.idYear = dto.idYear;
                    newExt.idMonth = dto.idMonth;
                    newExt.idStartDayWeek = dto.idStartDayWeek;
                    newExt.idDay = dto.idDay;
                    newExt.startTime = dto.startTime;
                    newExt.durationTime = dto.durationTime;
                    newExt.subj = dto.subj;
                    newExt.namePup = dto.namePup;
                    newExt.cost = dto.cost;
                    newExt.homework = dto.homework;
                    newExt.isPayed = dto.isPayed;
                    newExt.isDecayed = dto.isDecayed;
                    await newExt.save();
                    return newExt

                } else {
                    newExt = await this.extRepository.create(dto);
                    return newExt
                }
        
    }


}



