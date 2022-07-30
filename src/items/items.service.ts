import { Injectable } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';

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
  create(item: Item): Item {
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
