import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuPage } from './new-menu.page';

describe('NewMenuPage', () => {
  let component: NewMenuPage;
  let fixture: ComponentFixture<NewMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
