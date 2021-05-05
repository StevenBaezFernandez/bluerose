import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idless'
})
export class IdlessPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let splited = value.split('//');
    return splited[0];
  }

}
