import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConfirmBoxModule } from 'confirm-box';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConfirmBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
