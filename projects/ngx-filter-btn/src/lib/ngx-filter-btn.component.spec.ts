import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFilterBtnComponent } from './ngx-filter-btn.component';

describe('NgxFilterBtnComponent', () => {
  let component: NgxFilterBtnComponent;
  let fixture: ComponentFixture<NgxFilterBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFilterBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFilterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
