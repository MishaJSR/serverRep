import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExtController } from './ext.controller';
import { Ext } from './ext.model';
import { ExtService} from './ext.service';

@Module({
  controllers: [ExtController],
  providers: [ExtService],
  imports: [
    SequelizeModule.forFeature([Ext])
  ]
})
export class ExtModule {}
