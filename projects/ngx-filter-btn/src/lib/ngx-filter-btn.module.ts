import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxFilterBtnComponent } from './ngx-filter-btn.component';

@NgModule({
  declarations: [NgxFilterBtnComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgxFilterBtnComponent],
})
export class NgxFilterBtnModule {}
