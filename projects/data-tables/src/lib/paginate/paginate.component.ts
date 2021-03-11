import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paginate } from '../model';

@Component({
  selector: 'lib-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css'],
})
export class PaginateComponent implements OnInit {
  @Input() paginate: Paginate = new Paginate();
  @Output() emit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.paginationLogic();
  }

  paginationLogic() {
    this.paginate.totalPages = Math.ceil(
      this.paginate.totalItems / this.paginate.showEntries
    );

    this.paginate.startIndex = 0;
    this.paginate.endIndex = this.paginate.showEntries;
    this.emit.emit(this.paginate);
  }

  navigationLogic(move: number) {
    this.paginate.currentPage += move;
    if (move == 1) {
      this.paginate.startIndex += this.paginate.showEntries;
      this.paginate.endIndex += this.paginate.showEntries;
    } else {
      this.paginate.startIndex -= this.paginate.showEntries;
      this.paginate.endIndex -= this.paginate.showEntries;
    }

    this.emit.emit(this.paginate);
  }

  changeEntries(value: string) {
    this.paginate.showEntries = Number(value);
    this.paginate.totalPages = Math.ceil(
      this.paginate.totalItems / this.paginate.showEntries
    );
    this.paginate.currentPage = 1;
    this.paginate.startIndex = 0;
    this.paginate.endIndex = this.paginate.showEntries;
    this.emit.emit(this.paginate);
    console.log(this.paginate);
  }
}
