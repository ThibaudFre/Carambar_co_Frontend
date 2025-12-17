import { Component } from '@angular/core';
import seeds from '../mocks/jokes.json';
import { Jokecontainer } from '../jokecontainer/jokecontainer';

@Component({
  selector: 'app-alljokes',
  imports: [Jokecontainer],
  templateUrl: './alljokes.html',
  styleUrl: './alljokes.scss',
})
export class Alljokes {
  jokes = seeds;
}
