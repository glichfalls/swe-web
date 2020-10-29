import {Injectable} from '@angular/core';
import {Animal, ANIMALS} from '../models/animals.model';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  public getAnimals(): Array<Animal> {
    return [
      {type: ANIMALS.BIRD, name: 'Adler'},
      {type: ANIMALS.REPTILE, name: 'Eidechse'},
      {type: ANIMALS.BIRD, name: 'Eule'}
    ];
  }

}
