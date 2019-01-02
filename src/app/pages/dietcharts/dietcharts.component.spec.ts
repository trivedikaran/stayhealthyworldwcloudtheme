import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietchartsComponent } from './dietcharts.component';

describe('DietchartsComponent', () => {
  let component: DietchartsComponent;
  let fixture: ComponentFixture<DietchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
