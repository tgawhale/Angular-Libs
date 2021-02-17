import { Component } from '@angular/core';
import { SampleData, DATA } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-libs';
  data: SampleData[] = DATA;
  constructor() {}

  recordResponse(event) {
    console.log(event);
  }
}
