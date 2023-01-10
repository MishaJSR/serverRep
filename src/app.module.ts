import { Less } from './puples/lessons.model';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from '@nestjs/serve-static';
import { LessonsModule} from './puples/lessons.module';
import * as path from 'path'
import { Ext } from './extantions/ext.model';
import { ExtModule } from './extantions/ext.module';


@Module({
    controllers:[],
    providers: [],
    imports: [
        ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1',
            database: 'repetitor',
            models: [Less, Ext],
            autoLoadModels: true,
            
        }),
        LessonsModule,
        ExtModule
    ]
})
export class AppModule {}