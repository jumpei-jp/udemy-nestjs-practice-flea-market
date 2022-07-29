import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  // item全てを取得する
  @Get()
  findAll() {
    return 'This is find All';
  }
}
