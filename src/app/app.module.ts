import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './api-call.service';
import { UtilService } from './services/util.service';
@NgModule({
  declarations: [AppComponent, ApiCallsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiCallService, UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
