import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke, JokeResponse} from '../models/jokes.model';
import {Observable} from 'rxjs';

const url = 'http://api.icndb.com/jokes/random';

@Injectable({ providedIn: 'root' })
export class JokesService {
  constructor(private http: HttpClient) {}
  public getRandomJoke(): Observable<JokeResponse> {
    const r = this.http.get<JokeResponse>(url);
    console.log(r);
    return r;
  }
}
