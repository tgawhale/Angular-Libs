import { Component } from '@angular/core';
import { SampleData, DATA } from './sample-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-libs';

  constructor() {}

  recordResponse(event) {
    console.log(event);
  }
}
