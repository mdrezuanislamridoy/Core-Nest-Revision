import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MiddlewarePracticeService } from './middleware-practice.service';
import { MiddlewarePracticeController } from './middleware-practice.controller';
import { LoggerMiddleware } from 'src/core/middlewares/LoggerMiddleware';

@Module({
  controllers: [MiddlewarePracticeController],
  providers: [MiddlewarePracticeService],
})
export class MiddlewarePracticeModule {
  configure(customer: MiddlewareConsumer) {
    customer.apply(LoggerMiddleware).forRoutes(MiddlewarePracticeController);
  }
}
