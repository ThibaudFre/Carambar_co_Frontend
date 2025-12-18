import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jokecontainer } from '../jokecontainer/jokecontainer';
import { LoadingText } from '../loading-text/loading-text';

@Component({
  selector: 'app-alljokes',
  imports: [Jokecontainer, LoadingText],
  templateUrl: './alljokes.html',
  styleUrl: './alljokes.scss',
})
export class Alljokes implements OnInit {
  private http = inject(HttpClient);
  seeds: any;
  ngOnInit(): void {
    const cachedJokes = localStorage.getItem('list_jokes_cache');
    if (cachedJokes) {
      this.seeds = JSON.parse(cachedJokes);
      console.log("Données chargées depuis le cache");
    }
    this.http.get("https://carambar-co-backend.onrender.com/jokes")
      .subscribe({
        next: (response) => {
          this.seeds = response;
          console.log("Liste reçue :", response);
          localStorage.setItem('list_jokes_cache', JSON.stringify(response));
        },
        error: (err) => {
          console.error("Erreur API :", err);
        }
      })
  }
}
