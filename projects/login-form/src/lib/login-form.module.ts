import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [FormsModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
