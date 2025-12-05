import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewarePracticeModule } from './middleware-practice/middleware-practice.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [MiddlewarePracticeModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
