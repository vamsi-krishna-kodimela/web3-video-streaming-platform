import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      return '/home';
    },
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./screens/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./screens/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'player/:id',
    loadComponent: () =>
      import('./screens/player-screen/player-screen.component').then(
        (m) => m.PlayerScreenComponent
      ),
  },
  {
    path: 'stream',
    loadComponent: () =>
      import('./screens/streaming-screen/streaming-screen.component').then(
        (m) => m.StreamingScreenComponent
      ),
  },
  {
    path: 'uploader',
    loadComponent: () =>
      import('./screens/uploader-screen/uploader-screen.component').then(
        (m) => m.UploaderScreenComponent
      ),
  },
];
