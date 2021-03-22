import { Component, OnInit } from '@angular/core';
import { SampleData, DATA } from '../sample-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: SampleData[] = DATA;
  keys: string[] = Object.keys(DATA[0]);
}
