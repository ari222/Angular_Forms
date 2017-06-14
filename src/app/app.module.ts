import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*primeng module*/
import { ButtonModule,InputMaskModule, DropdownModule, InputTextModule, RadioButtonModule, InputTextareaModule, CalendarModule, SelectButtonModule, MessagesModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {LoggerRoutingModule} from './app-routing.module';
import {LogService, LogErrorHandler ,LOG_ERROR_HANDLER_PROVIDER} from './shared/';
import {ConfigurationResolveService} from './configuration-resolve.service';
import {ConfigurationService} from './configuration.service';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    LoggerRoutingModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    MessagesModule
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
