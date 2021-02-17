import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page',
})
export class PagePipe implements PipeTransform {
  transform(value: any[], ...args: number[]): unknown {
    value = value.slice(args[0], args[1]);
    return value;
  }
}
