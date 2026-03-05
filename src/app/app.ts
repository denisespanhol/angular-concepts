import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloworld.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basics-concepts');
}
