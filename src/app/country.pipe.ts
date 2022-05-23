import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: string, ...args: String[]): unknown {
    return value.slice(0,3);
  }

}
