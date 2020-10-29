import {Component} from '@angular/core';
import {JokesService} from '../../services/jokes.service';
import {Joke, JokeResponse} from '../../models/jokes.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {
  constructor(private jokeService: JokesService) {}
  public joke: Joke = null;
  showJoke(): void {
    this.jokeService.getRandomJoke().subscribe((data: JokeResponse) => {
      console.log(data);
      this.joke = {...data.value};
    });
  }
}
