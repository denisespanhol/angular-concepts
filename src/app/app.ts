import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MypageComponent } from './mypage/mypage.component';
import { HelloWorldComponent } from './helloworld/helloworld.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MypageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basics-concepts');
}
