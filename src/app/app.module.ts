import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { fileSlizePipe } from './shared/pipes/fileSize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    fileSlizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
