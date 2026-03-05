import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageComponent } from './mypage.component';

describe('MypageComponent', () => {
  let component: MypageComponent;
  let fixture: ComponentFixture<MypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MypageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MypageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
