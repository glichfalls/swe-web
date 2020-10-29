import {Component} from '@angular/core';
import {Animal, ANIMALS} from '../../models/animals.model';
import {AnimalService} from '../../services/animal.service';

@Component({
  selector: 'list-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent {
  constructor(private animalService: AnimalService) {}
  types = ANIMALS;
  selection = ANIMALS.BIRD;
  animals: Array<Animal> = this.animalService.getAnimals();
}
