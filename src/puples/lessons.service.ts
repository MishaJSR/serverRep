import { deleteLessDto } from './dto/delete.lesson.dto';
import { createLessDto } from './dto/create.lesson.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Less } from './lessons.model';

@Injectable()
export class LessonsService {
    constructor(@InjectModel(Less) private lessRepository: typeof Less){

    }

    async createLess(dto: createLessDto){
        const follow = await this.lessRepository.create(dto);
        return follow;
    }

    async deleteLess(dto: deleteLessDto){
        const follow = await this.lessRepository.destroy({
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

    async getAllLess(){
        const follow = await this.lessRepository.findAll({include: {all: true}});
        return follow;
    }


    async getLessById(id) {
        const follow = await this.lessRepository.findAll({where: {idYear: id}, include: {all: true}})
        return follow;
    }
}
