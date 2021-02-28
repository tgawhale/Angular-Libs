import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToolComponent } from './filter-tool.component';

describe('FilterToolComponent', () => {
  let component: FilterToolComponent;
  let fixture: ComponentFixture<FilterToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
