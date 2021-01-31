import { ElementRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private elementRef: ElementRef, translate: TranslateService) {
  }

  transform(value: string, file: any) {
    const val = file[value];
    console.log(val)
    return val
  }

}
