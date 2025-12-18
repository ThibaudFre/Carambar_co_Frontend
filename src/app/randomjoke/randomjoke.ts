import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jokecontainer } from '../jokecontainer/jokecontainer';
import { LoadingText } from '../loading-text/loading-text';

@Component({
  selector: 'app-randomjoke',
  imports: [Jokecontainer, LoadingText],
  templateUrl: './randomjoke.html',
  styleUrl: './randomjoke.scss',
})
export class Randomjoke {
  private http = inject(HttpClient)
  isClicked= signal(false);
  joke: any; //joke is used to display the joke component if true in the template (data from API)


  onShowAnswer(): void {
    this.joke = null; 
    this.isClicked.set(false); //this set false is used to force angular to destroy the previous joke block
    
    this.isClicked.set(true);
    this.http.get("https://carambar-co-backend.onrender.com/joke-random").subscribe({
      next: (response) => {
        this.joke = response;
        this.isClicked.set(false);
      },
      error: (err) => {
        console.error("Erreur API :", err);
      }
    })
  }
}
