import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterBtnModule } from '../../projects/ngx-table-operations/src/lib/filter-btn/filter-btn.module';
import { SortBtnComponent } from './table/sort-btn/sort-btn.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [AppComponent, SortBtnComponent, TableComponent],
  imports: [BrowserModule, FormsModule, FilterBtnModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
