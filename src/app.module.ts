import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import config from '../ormconfig';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ReportsModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
