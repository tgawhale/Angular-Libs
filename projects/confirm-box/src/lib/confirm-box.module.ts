import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ConfirmBoxComponent } from './confirm-box.component';

@NgModule({
  declarations: [ConfirmBoxComponent],
  imports: [CommonModule],
  exports: [ConfirmBoxComponent],
})
export class ConfirmBoxModule {}
