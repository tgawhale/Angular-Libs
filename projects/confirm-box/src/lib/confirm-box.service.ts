import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmBoxService {
  title: string = 'Your Title Here';
  description: string = '';
  isOpened: boolean = false;
  userFuncAfterConfirm: (a: boolean) => void;
  constructor() {}

  show(title: string, description: string, onConfirmed: (isConfirmed: boolean) => void) {
    this.title = title;
    this.description = description;
    this.isOpened = true;
    this.userFuncAfterConfirm = onConfirmed;
  }

  hide() {
    this.title = '';
    this.description = '';
    this.isOpened = false;
  }
}
