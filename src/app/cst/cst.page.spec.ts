import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSTPage } from './cst.page';

describe('CSTPage', () => {
  let component: CSTPage;
  let fixture: ComponentFixture<CSTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
