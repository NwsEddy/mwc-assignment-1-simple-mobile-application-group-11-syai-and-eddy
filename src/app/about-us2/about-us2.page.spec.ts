import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABoutUs2Page } from './about-us2.page';

describe('ABoutUs2Page', () => {
  let component: ABoutUs2Page;
  let fixture: ComponentFixture<ABoutUs2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABoutUs2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABoutUs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
