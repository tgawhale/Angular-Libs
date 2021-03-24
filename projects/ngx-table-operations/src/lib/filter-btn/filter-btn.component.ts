import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterOption, KeyModel } from './filter-btn.model';

@Component({
  selector: 'ngx-filter-btn',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.css'],
})
export class FilterBtnComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() numberKeys: string[] = [];
  @Output() filtered = new EventEmitter();

  dataCopy: any[] = [];
  keys: KeyModel[] = [];
  filterOptions: FilterOption[] = [];
  stringCondition: string[] = [
    'contains',
    'does not contain',
    'starts with',
    'ends with',
    'is',
    'is not',
    'is empty',
    'is not empty',
  ];

  numberCondition: string[] = [
    '=',
    '!=',
    '>',
    '<',
    '>=',
    '<=',
    'is empty',
    'is not empty',
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.data.length != 0) {
      this.dataCopy = [...this.data];
      this.prepareData();
    }
  }

  prepareData() {
    //declare a temp unique key array
    let getUniqueKeys: string[] = [];
    this.data.forEach((x) => {
      let k = Object.keys(x);
      //concat to temp array, then use set to filter unique, then convert back to array
      getUniqueKeys = Array.from(new Set(getUniqueKeys.concat(k)));
    });

    getUniqueKeys.forEach((x) => {
      //check if elements is a number key so
      //that datatype of that key can be used as number;
      let nk = this.numberKeys.find((n) => n == x);
      if (nk !== undefined) this.keys.push({ key: x, isNumber: true });
      else this.keys.push({ key: x, isNumber: false });
    });
  }

  addFilter() {
    let fo = new FilterOption();

    //if its the 1st filter
    if (this.filterOptions.length == 0) fo.clause = 'Where';
    else fo.clause = 'and'; //default is and
    //set key
    fo.key = this.keys[0].key;
    //set datatype
    fo.dataType = this.keys[0].isNumber ? 'number' : 'string';
    //set conditions
    fo.conditon = this.keys[0].isNumber
      ? this.numberCondition[0]
      : this.stringCondition[0];
    //set value
    fo.value = '';
    //push to array
    this.filterOptions.push(fo);
  }

  changeDataType(foIndex: number, foKey: string) {
    let findKey = this.keys.find((x) => x.key == foKey);
    if (findKey.isNumber) {
      this.filterOptions[foIndex].dataType = 'number';
      this.filterOptions[foIndex].conditon = this.numberCondition[0];
    } else {
      this.filterOptions[foIndex].dataType = 'string';
      this.filterOptions[foIndex].conditon = this.stringCondition[0];
    }
  }

  applyFilter() {
    this.data = [...this.dataCopy];
    this.filterOptions.forEach((x) => {
      if (x.clause == 'or') this.data = [...this.dataCopy];
      if (x.dataType == 'number') this.numberFilter(x);
      else this.stringFilter(x);
    });
  }

  numberFilter(fo: FilterOption) {
    switch (fo.conditon) {
      case '=':
        this.data = this.data.filter((x) => x[fo.key] == Number(fo.value));
        break;
      case '!=':
        this.data = this.data.filter((x) => x[fo.key] != Number(fo.value));
        break;
      case '>':
        this.data = this.data.filter((x) => x[fo.key] > Number(fo.value));
        break;
      case '<':
        this.data = this.data.filter((x) => x[fo.key] < Number(fo.value));
        break;
      case '>=':
        this.data = this.data.filter((x) => x[fo.key] >= Number(fo.value));
        break;
      case '<=':
        this.data = this.data.filter((x) => x[fo.key] <= Number(fo.value));
        break;
      case 'is empty':
        this.data = this.data.filter((x) => x[fo.key] == null);
        break;
      case 'is not empty':
        this.data = this.data.filter((x) => x[fo.key] != null);
        break;
    }
    this.filtered.emit(this.data);
  }

  stringFilter(fo: FilterOption) {
    switch (fo.conditon) {
      case 'contains':
        this.data = this.data.filter((x) =>
          x[fo.key].toLowerCase().includes(fo.value.toLowerCase())
        );
        break;
      case 'does not contain':
        this.data = this.data.filter(
          (x) => !x[fo.key].toLowerCase().includes(fo.value.toLowerCase())
        );
        break;
      case 'starts with':
        this.data = this.data.filter((x) =>
          x[fo.key].toLowerCase().startsWith(fo.value.toLowerCase())
        );
        break;
      case 'ends with':
        this.data = this.data.filter((x) =>
          x[fo.key].toLowerCase().endsWith(fo.value.toLowerCase())
        );
        break;
      case 'is':
        this.data = this.data.filter(
          (x) => x[fo.key].toLowerCase() == fo.value.toLowerCase()
        );
        break;
      case 'is not':
        this.data = this.data.filter(
          (x) => x[fo.key].toLowerCase() != fo.value.toLowerCase()
        );
        break;
      case 'is empty':
        this.data = this.data.filter((x) => x[fo.key] == null);
        break;
      case 'is not empty':
        this.data = this.data.filter((x) => x[fo.key] != null);
        break;
    }
    this.filtered.emit(this.data);
  }

  deleteFilter(i: number) {
    this.filterOptions.splice(i, 1);
    if (i == 0 && this.filterOptions.length != 0)
      this.filterOptions[0].clause = 'Where';
    if (this.filterOptions.length == 0) {
      this.data = [...this.dataCopy];
      this.filtered.emit(this.data);
    }
  }
}
