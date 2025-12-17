import { Component, input} from '@angular/core';

@Component({
  selector: 'app-jokecontainer',
  imports: [],
  templateUrl: './jokecontainer.html',
  styleUrl: './jokecontainer.scss',
})
export class Jokecontainer {
  riddle = input<string>();
  answer = input<string>();
}
