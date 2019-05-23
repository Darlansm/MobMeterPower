import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterPage } from './meter.page';

describe('MeterPage', () => {
  let component: MeterPage;
  let fixture: ComponentFixture<MeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
