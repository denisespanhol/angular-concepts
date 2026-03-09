import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [ FormsModule, CommonModule ],
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
