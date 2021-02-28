import { Component, Input, OnInit } from '@angular/core';
import { TableKeys } from '../../model';

@Component({
  selector: 'lib-hide-columns-tool',
  templateUrl: './hide-columns-tool.component.html',
  styleUrls: ['./hide-columns-tool.component.css'],
})
export class HideColumnsToolComponent implements OnInit {
  @Input() keys: TableKeys[] = [];
  constructor() {}

  ngOnInit(): void {}
}
