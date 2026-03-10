import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './item-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-list',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css',
})
export class ShopList {
  newItem: string = '';
  list: ItemList[] = [];

  addItemToList() {
    if (!this.newItem) return;

    let itemList = new ItemList();
    itemList.name = this.newItem;
    itemList.id = this.list.length + 1;

    this.list.push(itemList);

    this.newItem = '';

    console.table(this.list);
  }

  riskItem(itemList: ItemList) {
    itemList.itsPurchased = !itemList.itsPurchased;
  }


}
