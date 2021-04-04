import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ConditionsInArray,
  FilterOption,
  KeyModel,
} from './ngx-filter-btn.model';

@Component({
  selector: 'ngx-filter-btn',
  templateUrl: './ngx-filter-btn.component.html',
  styleUrls: ['./ngx-filter-btn.component.css'],
})
export class NgxFilterBtnComponent implements OnInit {
  @Input() data: any[] = []; //main data of array
  @Input() numberKeys: string[] = []; // columns whos dataTypes are number
  @Input() booleanKeys: string[] = []; // columns whos dataTypes are boolean
  @Input() dateKeys: string[] = []; // columns whos dataTypes are Date

  @Output() filtered = new EventEmitter(); //Just passes the filtered data

  dataCopy: any[] = []; // Store a copy of original data
  orDataCopy: any[] = []; //Store a copy when used with OR clause
  keys: KeyModel[] = []; // Store columns names of Data array
  filterOptions: FilterOption[] = []; // Model to create filters

  conditionsList: ConditionsInArray = new ConditionsInArray(); //Contains lists of all conditions

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
      //Find keys whos datatype are number
      let nk = this.numberKeys.find((n) => n == x);

      //Find keys whos datatype are boolean
      let bk = this.booleanKeys.find((n) => n == x);

      //Find keys whos datatype are Date
      let dk = this.dateKeys.find((n) => n == x);

      if (nk !== undefined) {
        this.keys.push({ key: x, dataType: 'number' });
        return;
      } else if (bk !== undefined) {
        this.keys.push({ key: x, dataType: 'boolean' });
        return;
      } else if (dk !== undefined) {
        this.keys.push({ key: x, dataType: 'date' });
        return;
      } else {
        this.keys.push({ key: x, dataType: 'string' });
        return;
      }
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
    fo.dataType = this.keys[0].dataType;
    //set conditions
    fo.conditon = this.getConditionList(fo.dataType)[0];
    //set value
    fo.value = '';
    //push to array
    this.filterOptions.push(fo);
  }

  getConditionList(condition: string) {
    switch (condition) {
      case 'number':
        return this.conditionsList.number;
      case 'boolean':
        return this.conditionsList.boolean;
      case 'date':
        return this.conditionsList.date;
      default:
        return this.conditionsList.string;
    }
  }

  //Triggers when there is change in select tag of keys
  changeDataType(foIndex: number, foKey: string) {
    let findKey = this.keys.find((x) => x.key == foKey);
    this.filterOptions[foIndex].dataType = findKey.dataType;
    this.filterOptions[foIndex].conditon = this.getConditionList(
      findKey.dataType
    )[0];
  }

  applyFilter() {
    this.data = [...this.dataCopy];
    this.filterOptions.forEach((x) => {
      if (x.clause == 'or') {
        this.orDataCopy = [];
        this.orDataCopy = [...this.data]; //Store previous filtered data
        this.data = [...this.dataCopy];
      }
      if (x.dataType == 'number') this.numberFilter(x);
      else if (x.dataType == 'boolean') this.booleanFilter(x);
      else if (x.dataType == 'date') this.dateFilter(x);
      else this.stringFilter(x);
    });
  }

  numberFilter(fo: FilterOption) {
    let value = Number(fo.value);
    switch (fo.conditon) {
      case '=':
        this.data = this.data.filter((x) => x[fo.key] == value);
        break;
      case '!=':
        this.data = this.data.filter((x) => x[fo.key] != value);
        break;
      case '>':
        this.data = this.data.filter((x) => x[fo.key] > value);
        break;
      case '<':
        this.data = this.data.filter((x) => x[fo.key] < value);
        break;
      case '>=':
        this.data = this.data.filter((x) => x[fo.key] >= value);
        break;
      case '<=':
        this.data = this.data.filter((x) => x[fo.key] <= value);
        break;
      case 'is empty':
        this.data = this.data.filter((x) => x[fo.key] == null);
        break;
      case 'is not empty':
        this.data = this.data.filter((x) => x[fo.key] != null);
        break;
    }
    if (fo.clause == 'or') this.data = this.data.concat(this.orDataCopy);
    this.filtered.emit(this.data);
  }

  stringFilter(fo: FilterOption) {
    let value = fo.value.toLowerCase();
    switch (fo.conditon) {
      case 'contains':
        this.data = this.data.filter((x) =>
          `${x[fo.key]}`.toLowerCase().includes(value)
        );
        break;
      case 'does not contain':
        this.data = this.data.filter(
          (x) => !`${x[fo.key]}`.toLowerCase().includes(value)
        );
        break;
      case 'starts with':
        this.data = this.data.filter((x) =>
          `${x[fo.key]}`.toLowerCase().startsWith(value)
        );
        break;
      case 'ends with':
        this.data = this.data.filter((x) =>
          `${x[fo.key]}`.toLowerCase().endsWith(value)
        );
        break;
      case 'is':
        this.data = this.data.filter(
          (x) => `${x[fo.key]}`.toLowerCase() == value
        );
        break;
      case 'is not':
        this.data = this.data.filter(
          (x) => `${x[fo.key]}`.toLowerCase() != value
        );
        break;
      case 'is empty':
        this.data = this.data.filter((x) => x[fo.key] == null);
        break;
      case 'is not empty':
        this.data = this.data.filter((x) => x[fo.key] != null);
        break;
    }
    if (fo.clause == 'or') this.data = this.data.concat(this.orDataCopy);
    this.filtered.emit(this.data);
  }

  booleanFilter(fo: FilterOption) {
    switch (fo.conditon) {
      case 'true':
        this.data = this.data.filter((x) => x[fo.key] == true);
        break;
      case 'false':
        this.data = this.data.filter((x) => x[fo.key] == false);
        break;
      case 'is empty':
        this.data = this.data.filter((x) => x[fo.key] == null);
        break;
      case 'is not empty':
        this.data = this.data.filter((x) => x[fo.key] != null);
        break;
    }
    if (fo.clause == 'or') this.data = this.data.concat(this.orDataCopy);
    this.filtered.emit(this.data);
  }

  dateFilter(fo: FilterOption) {
    let value = new Date(fo.value).getTime();
    switch (fo.conditon) {
      case '=':
        this.data = this.data.filter(
          (x) => new Date(x[fo.key]).getTime() == value
        );
        break;
      case '!=':
        this.data = this.data.filter(
          (x) => new Date(x[fo.key]).getTime() != value
        );
        break;
      case '>':
        this.data = this.data.filter(
          (x) => new Date(x[fo.key]).getTime() > value
        );
        break;
      case '<':
        this.data = this.data.filter(
          (x) => new Date(x[fo.key]).getTime() < value
        );
        break;
      case '>=':
        this.data = this.data.filter(
          (x) => new Date(x[fo.key]).getTime() >= value
        );
        break;
      case '<=':
        this.data = this.data.filter(
          (x) => new Date(x[fo.key]).getTime() <= value
        );
        break;
      case 'is empty':
        this.data = this.data.filter((x) => x[fo.key] == null);
        break;
      case 'is not empty':
        this.data = this.data.filter((x) => x[fo.key] != null);
        break;
    }
    if (fo.clause == 'or') this.data = this.data.concat(this.orDataCopy);
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
