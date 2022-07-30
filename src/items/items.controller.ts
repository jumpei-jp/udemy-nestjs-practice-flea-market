import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
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
  // Dtoのパラメータとリクエストパラメータが同じなら一つにまとめることが可能
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }

  // 商品を購入
  @Patch(':id')
  updateStatus(@Param('id') id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  // 商品削除
  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(id);
  }
}
