import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgawhaleComponent } from './tgawhale.component';

describe('TgawhaleComponent', () => {
  let component: TgawhaleComponent;
  let fixture: ComponentFixture<TgawhaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgawhaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgawhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
