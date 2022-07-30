import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  // ItemsServiceをDIする
  constructor(private readonly itemsService: ItemsService) {}

  // item全てを取得する
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  // Itemを保存
  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
    };
    return this.itemsService.create(item);
  }
}
