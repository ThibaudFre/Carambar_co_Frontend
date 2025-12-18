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


  ngOnInit(): void {
    const cachedJokes = localStorage.getItem('riddle_cache');

    if (cachedJokes) {
      this.seeds = JSON.parse(cachedJokes);
      console.log("Données chargées depuis le cache");
    }
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
