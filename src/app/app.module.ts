import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DataTablesModule } from '../../projects/data-tables/src/lib/data-tables.module';
import { CodeTestComponent } from './code-test/code-test.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { TimerPipe } from './task-tracker/timer.pipe';
@NgModule({
  declarations: [AppComponent, CodeTestComponent, TaskTrackerComponent, TimerPipe],
  imports: [BrowserModule, DataTablesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
