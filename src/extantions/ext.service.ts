import { createReductByIdtDto } from './dto/create.reductById.dto';
import { createGetWeekDto } from './dto/create.getWeek.dto';
import { deleteExtDto } from './dto/delete.ext.dto';
import { createExtDto } from './dto/create.ext.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ext} from './ext.model';
import { createDecDto } from './dto/create.decay.dto';
import { createCheckIsReadDto } from './dto/create.checkIsRead.dto';

@Injectable()
export class ExtService {
    constructor(@InjectModel(Ext) private extRepository: typeof Ext){

    }

    async createExt(dto: createExtDto){
        const follow = await this.extRepository.create(dto);
        if (!follow) throw new HttpException('cant create', HttpStatus.BAD_REQUEST); 
        else return follow;
        
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

    async getWeekDec(dto: createGetWeekDto){
        const ext = await this.extRepository.findAll({
            where: {
                idYear: dto.idYear,
                idMonth: dto.idMonth,
                idStartDayWeek: dto.idStartDayWeek,
                isDecayed: true
            }
        });
        return ext;
    }

    async decayById(dto: createDecDto){
        const ext = await this.extRepository.findOne({
            where: {
                id: dto.idExt
            }
        });
        if (!ext) throw new HttpException('no this id', HttpStatus.BAD_REQUEST); 
        else {
            ext.isDecayed = true;
            ext.save()
            return ext;
        }
    }

    
    
    async createReductById(dto: createReductByIdtDto) {
        let newExt;
            newExt = await this.extRepository.findOne({ 
                where: { 
                    id: dto.idDecayed
                } })
                if (!newExt) throw new HttpException('no this lesson', HttpStatus.BAD_REQUEST); else {
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
                }

    }   
    
    async checkIsRead(dto: createCheckIsReadDto) {
        let newExt;
            newExt = await this.extRepository.findOne({ 
                where: { 
                    idYear: dto.idYear,  
                    idMonth: dto.idMonth,
                    idStartDayWeek: dto.idStartDayWeek,
                    idDay: dto.idDay,
                    startTime: dto.startTime,
                    isDecayed: false
                } })
                if (!newExt) throw new HttpException('no this lesson', HttpStatus.BAD_REQUEST)
                return newExt
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



