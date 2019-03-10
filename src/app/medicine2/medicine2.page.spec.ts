import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicine2Page } from './medicine2.page';

describe('Medicine2Page', () => {
  let component: Medicine2Page;
  let fixture: ComponentFixture<Medicine2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medicine2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medicine2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
