import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  // ItemsServiceをDIする
  constructor(private readonly itemsService: ItemsService) {}

  // item全てを取得する
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // 特定のitemを取得
  @Get(':id') // idをパスで受け取る(引数が可変の場合':'を入れる)
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
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

  // 商品を購入
  @Patch(':id')
  updateStatus(@Param('id') id: string): Item {
    return this.itemsService.updateStatus(id);
  }
}
