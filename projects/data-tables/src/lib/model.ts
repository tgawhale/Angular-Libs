export class TableKeys {
  key: string;
  isAsc: boolean;
  isVisible: boolean = true;
}

export class Paginate {
  totalItems: number;
  currentPage: number = 1;
  showEntries: number; // entered by user
  totalPages: number;
  startIndex: number;
  endIndex: number;
}

export class ResponseModel {
  type: string;
  indexes: number[];
}
