import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideColumnsToolComponent } from './hide-columns-tool.component';

describe('HideColumnsToolComponent', () => {
  let component: HideColumnsToolComponent;
  let fixture: ComponentFixture<HideColumnsToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideColumnsToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideColumnsToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
