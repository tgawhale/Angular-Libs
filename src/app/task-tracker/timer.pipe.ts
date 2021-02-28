import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value < 0) return value + '';
    if (value == undefined) return 'No Value';

    let totalSec = Math.floor(value / 1000);
    let hours = Math.floor(totalSec / 3600);
    totalSec = totalSec - hours * 3600;
    let min = Math.floor(totalSec / 60);
    let sec = totalSec - min * 60;
    return `${hours}hr ${min} min ${sec} sec`;
  }
}
