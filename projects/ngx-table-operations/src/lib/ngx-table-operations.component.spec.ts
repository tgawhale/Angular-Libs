import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableOperationsComponent } from './ngx-table-operations.component';

describe('NgxTableOperationsComponent', () => {
  let component: NgxTableOperationsComponent;
  let fixture: ComponentFixture<NgxTableOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTableOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
