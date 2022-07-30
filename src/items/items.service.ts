import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  // メモリに保存されているcreateで作成されたItemを返す
  findAll(): Item[] {
    return this.items;
  }

  // 受け取ったパラメータをitemという配列に入れて返す
  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
