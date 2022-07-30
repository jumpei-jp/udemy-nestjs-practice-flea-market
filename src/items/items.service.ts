import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  // メモリに保存されているcreateで作成されたItemを返す
  findAll(): Item[] {
    return this.items;
  }

  // idを元にItemを取得する
  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  // 受け取ったパラメータをitemという配列に入れて返す
  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE, // statusはDtoにないので定義
    };
    this.items.push(item);
    return item;
  }

  // 商品の購入があった際にstatusを更新する
  updateStatus(id: string): Item {
    const item = this.findById(id);

    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  // 商品の削除
  delete(id: string): void {
    //指定したidの商品以外を残す
    this.items = this.items.filter((item) => item.id !== id);
  }
}
