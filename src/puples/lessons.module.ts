import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LessonsController } from './lessons.controller';
import { Less } from './lessons.model';
import { LessonsService } from './lessons.service';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService],
  imports: [
    SequelizeModule.forFeature([Less])
  ]
})
export class LessonsModule {}
