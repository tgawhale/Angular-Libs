import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paginate, ResponseModel, TableKeys } from './model';

@Component({
  selector: 'data-table',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css'],
})
export class DataTablesComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() response = new EventEmitter();

  keys: TableKeys[] = [];

  pg: Paginate = new Paginate();

  isSearchOn: boolean = false;
  searchText: string = '';
  constructor() {}

  ngOnInit(): void {
    this.prepareKeys();
    this.sortTable(this.keys[0].key);
    this.pg.totalItems = this.data.length;
    this.pg.showEntries = 10;
  }

  prepareKeys() {
    Object.keys(this.data[0]).forEach((x) =>
      this.keys.push({ key: x, isAsc: null, isVisible: true })
    );
  }

  sortTable(input: string) {
    let tb: TableKeys = this.keys.find((x) => x.key == input);
    if (tb.isAsc == null) {
      //Sort on new Head
      this.keys.forEach((x) => (x.isAsc = null));
      //Sort for Asc
      this.sortFuncLogic(tb.key, -1);
      tb.isAsc = true;
    } else if (tb.isAsc) {
      //Already in Ascending, Change to decending
      this.sortFuncLogic(tb.key, 1);
      tb.isAsc = false;
    } else {
      //Already in Descending, Change to Ascending
      this.sortFuncLogic(tb.key, -1);
      tb.isAsc = true;
    }
  }

  sortFuncLogic(key: string, n: number) {
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

  sendResponse(type: string, value: number[]) {
    let response = new ResponseModel();
    response.type = type;
    response.indexes = value;
    this.response.emit(response);
  }

  searchLogic() {}
}
