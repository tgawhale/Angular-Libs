import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxFilterBtnModule } from '../../projects/ngx-filter-btn/src/lib/ngx-filter-btn.module';
import { SortBtnComponent } from './table/sort-btn/sort-btn.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [AppComponent, SortBtnComponent, TableComponent],
  imports: [BrowserModule, FormsModule, NgxFilterBtnModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
