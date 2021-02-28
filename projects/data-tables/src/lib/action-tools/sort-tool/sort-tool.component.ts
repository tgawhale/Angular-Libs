import { Component, Input, OnInit } from '@angular/core';
import { TableKeys } from '../../model';

@Component({
  selector: 'lib-sort-tool',
  templateUrl: './sort-tool.component.html',
  styleUrls: ['./sort-tool.component.css'],
})
export class SortToolComponent implements OnInit {
  @Input() keys: TableKeys[] = [];
  constructor() {}

  ngOnInit(): void {}
}
