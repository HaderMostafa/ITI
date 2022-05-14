import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice',
  pure:false,
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: string[],str:string):string[] {
    let result: string[] = [];
    for(let i=0;i<value.length;i++) {
      if(value[i].includes(str)){
        result.push(value[i]);
      }
    }
  return result;
  }
}