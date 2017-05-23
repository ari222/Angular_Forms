/* tslint:disable:no-unused-variable */
import { Router , ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Test2Component } from './test2.component';
import { RouterTestingModule } from '@angular/router/testing';
import {ConfigurationService} from '../configuration.service';
import {ConfigurationServiceStub} from '../testing';
import {RouterStub,ActivatedRouteStub} from '../testing';

describe('Test2Component', () => {
  let component: Test2Component;
  let fixture: ComponentFixture<Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], 
      declarations: [ Test2Component ],
      providers:[
        { provide: Router,      useClass: RouterStub },
        { provide: ActivatedRoute,      useClass: ActivatedRouteStub },
        { provide: ConfigurationService, useClass: ConfigurationServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
