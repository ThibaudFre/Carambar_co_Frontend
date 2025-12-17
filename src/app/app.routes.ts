import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Alljokes } from './alljokes/alljokes';
import {Onejoke} from './onejoke/onejoke';
import { Randomjoke } from './randomjoke/randomjoke';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: "Welcome on Home page !"
    },
    {
        path: 'alljokes',
        component: Alljokes,
        title: "Display all the Jokes !"
    },
    {
        path: 'onejoke',
        component: Onejoke,
        title: "Display one joke !"
    },
    {
        path: 'randomjoke',
        component: Randomjoke,
        title: "Display a random joke !"
    }
];
