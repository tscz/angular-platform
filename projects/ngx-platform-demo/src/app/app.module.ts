import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPlatformModule } from 'ngx-platform';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPlatformModule,
    NgbModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
