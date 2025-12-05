import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getUser(@CurrentUser() user) {
    return user;
  }
}
