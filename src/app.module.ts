import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ReportsModule],
})
export class AppModule {}
