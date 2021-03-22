import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBtnComponent } from './filter-btn.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [FilterBtnComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterBtnComponent],
})
export class FilterBtnModule {}
