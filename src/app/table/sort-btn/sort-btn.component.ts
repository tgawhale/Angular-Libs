import { Component, Input, OnInit } from '@angular/core';
import { SortOption } from '../sort-btn/sort.model';

@Component({
  selector: 'app-sort-btn',
  templateUrl: './sort-btn.component.html',
  styleUrls: ['./sort-btn.component.css'],
})
export class SortBtnComponent implements OnInit {
  @Input() data: any[] = [];
  keys: string[] = [];
  appliedSorts: SortOption[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.data.length != 0) this.keys = Object.keys(this.data[0]);
  }

  setnewSort(value: string) {
    let isNumber = false;
    if (typeof this.data[0][value] === 'number') isNumber = true;

    this.appliedSorts.push({
      order: this.appliedSorts.length,
      key: value,
      isNumber: isNumber,
      isAsc: true,
    });
  }

  applySort() {
    this.appliedSorts.forEach((x) => {
      if (x.isNumber) {
        if (x.isAsc) this.data.sort((a, b) => a[x.key] - b[x.key]);
        else this.data.sort((a, b) => b[x.key] - a[x.key]);
      } else {
        if (x.isAsc) this.sorta(x.key, -1);
        else this.sorta(x.key, 1);
      }
    });
  }

  sorta(key: string, n: number) {
    this.data.sort((a, b) => {
      if (a[key] > b[key]) {
        return -n;
      }
      if (b[key] > a[key]) {
        return n;
      }
      return 0;
    });
  }
}
