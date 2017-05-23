import { Router , ActivatedRoute } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import {ConfigurationService} from '../configuration.service';
import {ConfigurationServiceStub} from '../testing';
import { TestComponent } from './test.component';
import {RouterStub,ActivatedRouteStub} from '../testing';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],   
      declarations: [ TestComponent ],
      providers:[
        { provide: Router,      useClass: RouterStub },
        { provide: ActivatedRoute,      useClass: ActivatedRouteStub },
        { provide: ConfigurationService, useClass: ConfigurationServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
