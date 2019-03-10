import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appointment2Page } from './appointment2.page';

describe('Appointment2Page', () => {
  let component: Appointment2Page;
  let fixture: ComponentFixture<Appointment2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appointment2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appointment2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
