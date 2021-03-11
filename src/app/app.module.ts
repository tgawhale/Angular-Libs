import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DataTablesModule } from '../../projects/data-tables/src/lib/data-tables.module';
import { CodeTestComponent } from './code-test/code-test.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { TimerPipe } from './task-tracker/timer.pipe';
import { SortBtnComponent } from './table/sort-btn/sort-btn.component';
import { FilterBtnComponent } from './table/filter-btn/filter-btn.component';
@NgModule({
  declarations: [
    AppComponent,
    CodeTestComponent,
    TaskTrackerComponent,
    TimerPipe,
    SortBtnComponent,
    FilterBtnComponent,
  ],
  imports: [BrowserModule, DataTablesModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
