import { Controller, Get } from '@nestjs/common';
import { MiddlewarePracticeService } from './middleware-practice.service';

@Controller('middleware-practice')
export class MiddlewarePracticeController {
  constructor(
    private readonly middlewarePracticeService: MiddlewarePracticeService,
  ) {}

  @Get()
  logIt() {}
}
