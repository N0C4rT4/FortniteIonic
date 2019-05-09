import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsPage } from './weapons.page';

describe('WeaponsPage', () => {
  let component: WeaponsPage;
  let fixture: ComponentFixture<WeaponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
