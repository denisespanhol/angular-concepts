import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class Calculator {
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;

  ResultCalc() {
    this.result = this.numberOne + this.numberTwo;
  }
}
