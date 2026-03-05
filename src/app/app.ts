import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basics-concepts');
}
