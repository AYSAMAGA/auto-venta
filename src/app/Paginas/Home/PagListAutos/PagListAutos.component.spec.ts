/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagListAutosComponent } from './PagListAutos.component';

describe('PagListAutosComponent', () => {
  let component: PagListAutosComponent;
  let fixture: ComponentFixture<PagListAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagListAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagListAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
