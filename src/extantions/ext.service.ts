import { deleteExtDto } from './dto/delete.ext.dto';
import { createExtDto } from './dto/create.ext.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ext} from './ext.model';

@Injectable()
export class ExtService {
    constructor(@InjectModel(Ext) private extRepository: typeof Ext){

    }

    async createLess(dto: createExtDto){
        const follow = await this.extRepository.create(dto);
        return follow;
    }

    async deleteLess(dto: deleteExtDto){
        const follow = await this.extRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return follow;
    }

    async getAllLess(){
        const follow = await this.extRepository.findAll({include: {all: true}});
        return follow;
    }


    async getLessById(id) {
        const follow = await this.extRepository.findAll({where: {idYear: id}, include: {all: true}})
        return follow;
    }
}
