import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTablesComponent } from './data-tables.component';
import { PaginateComponent } from './paginate/paginate.component';
import { PagePipe } from './page.pipe';

@NgModule({
  declarations: [DataTablesComponent, PaginateComponent, PagePipe],
  imports: [BrowserModule, FormsModule],
  exports: [DataTablesComponent],
})
export class DataTablesModule {}
