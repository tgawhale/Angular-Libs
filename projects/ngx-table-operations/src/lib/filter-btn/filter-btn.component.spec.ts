import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBtnComponent } from './filter-btn.component';

describe('FilterBtnComponent', () => {
  let component: FilterBtnComponent;
  let fixture: ComponentFixture<FilterBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
