import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): unknown {
    if(value == 'cumpleanos'){
      return 'cumpleaños';
    }else{
      return value.replace(/-/g, ' ');
    }
  }

}
