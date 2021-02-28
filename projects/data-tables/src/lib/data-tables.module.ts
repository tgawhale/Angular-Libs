import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTablesComponent } from './data-tables.component';
import { PaginateComponent } from './paginate/paginate.component';
import { FilterToolComponent } from './action-tools/filter-tool/filter-tool.component';
import { HideColumnsToolComponent } from './action-tools/hide-columns-tool/hide-columns-tool.component';
import { SortToolComponent } from './action-tools/sort-tool/sort-tool.component';

@NgModule({
  declarations: [DataTablesComponent, PaginateComponent, FilterToolComponent, HideColumnsToolComponent, SortToolComponent],
  imports: [BrowserModule, FormsModule],
  exports: [DataTablesComponent],
})
export class DataTablesModule {}
