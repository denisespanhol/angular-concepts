import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator.component';
import { ShopList } from './shop-list/shop-list.component';

@Component({
  selector: 'app-root',
  imports: [ ShopList ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basics-concepts');
}
