import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Jokecontainer } from '../jokecontainer/jokecontainer';
import { LoadingText } from '../loading-text/loading-text';

@Component({
  selector: 'app-onejoke',
  imports: [ReactiveFormsModule, Jokecontainer, LoadingText],
  templateUrl: './onejoke.html',
  styleUrl: './onejoke.scss',
})
export class Onejoke implements OnInit {
  private http = inject(HttpClient);
  seeds: any;
  joke = new FormControl('');
  isJokeChoosen = signal<boolean>(false);
  jokeChoosen = signal<any>(null);

  /* Caching strategy (Stale-While-Revalidate):
   1. Check LocalStorage: If data exists, display it immediately for instant UI.
   2. Fetch from API: Once the Observer receives fresh data, update the UI.
   3. Sync: Overwrite the cache with the new data for the next visit.
 */

  ngOnInit(): void {
    const cachedJokes = localStorage.getItem('riddle_cache');
    //Both lines above and under serve to check the localStorage/cache
    if (cachedJokes) {
      this.seeds = JSON.parse(cachedJokes);
      console.log("Données chargées depuis le cache");
    }
    /*
      serve to Fetch the list of all the jokes but only with riddle & id in
      order to display a jokes list. Then the user can select one of them and display it
    */
    this.http.get("https://carambar-co-backend.onrender.com/jokes-list")
      .subscribe({
        next: (response) => {
          this.seeds = response;
          console.log("Liste reçue :", response);
          localStorage.setItem('riddle_cache', JSON.stringify(response));
        },
        error: (err) => {
          console.error("Erreur API :", err);
        }
      })
    //Joke is a FormControl so we used it to listen and display the joke when one is selected from the list
    this.joke.valueChanges
      .subscribe((selectedJoke) => {
        this.http.get(`https://carambar-co-backend.onrender.com/jokes/${selectedJoke}`).subscribe({
          next: (response) => {
            this.jokeChoosen.set(response);
            this.isJokeChoosen.set(true)
          },
          error: (err) => {
            console.error("Erreur API :", err);
          }
        })

      })
  }
}
