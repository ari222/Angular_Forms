import { BrowserModule, Title } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoggerRoutingModule} from './app-routing.module';
import {LogService,LogErrorHandler ,LOG_ERROR_HANDLER_PROVIDER} from './shared/';
import {ConfigurationResolveService} from './configuration-resolve.service';
import {ConfigurationService} from './configuration.service';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoggerRoutingModule
  ],
  providers: [
    ConfigurationResolveService,
    ConfigurationService,
    LogService,
    Title,
    LOG_ERROR_HANDLER_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
