import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop-list',
  imports: [FormsModule],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css',
})
export class ShopList {
  newItem: string = '';

  addItemToList() {
    console.log(this.newItem);
    this.newItem = '';
  }
}
