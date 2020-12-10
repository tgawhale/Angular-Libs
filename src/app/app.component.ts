import { Component } from '@angular/core';
import { ConfirmBoxService } from 'confirm-box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-libs';
  constructor(private cbService: ConfirmBoxService) {}
  open() {
    this.cbService.show(
      'The item will be deleted',
      'The current selected item will be deleted. The process is irreversible.',
      (val) => {
        alert(val);
      }
    );
  }
}
