import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortToolComponent } from './sort-tool.component';

describe('SortToolComponent', () => {
  let component: SortToolComponent;
  let fixture: ComponentFixture<SortToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
