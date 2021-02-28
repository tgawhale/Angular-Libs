import { Component, Input, OnInit } from '@angular/core';
import { TableKeys } from '../../model';

@Component({
  selector: 'lib-filter-tool',
  templateUrl: './filter-tool.component.html',
  styleUrls: ['./filter-tool.component.css'],
})
export class FilterToolComponent implements OnInit {
  @Input() keys: TableKeys[] = [];

  fil: string[] = [
    'contains',
    'does not contain',
    'is',
    'is not',
    'is empty',
    'is not empty',
  ];
  constructor() {}

  ngOnInit(): void {}
}
