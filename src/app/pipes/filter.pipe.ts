import {Pipe, PipeTransform} from '@angular/core';
import {Animal, ANIMALS} from '../models/animals.model';


@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(value: Array<Animal>, type: number): Array<Animal> {
    return value.filter(animal => animal.type === type);
  }
}
