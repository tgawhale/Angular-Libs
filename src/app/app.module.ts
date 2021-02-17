import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DataTablesModule } from '../../projects/data-tables/src/lib/data-tables.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataTablesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
