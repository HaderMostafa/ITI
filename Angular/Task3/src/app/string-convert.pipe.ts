import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string): string {
    
    let newStr:string=value.replace('-', ' ');

    return newStr;
    
  }

}
