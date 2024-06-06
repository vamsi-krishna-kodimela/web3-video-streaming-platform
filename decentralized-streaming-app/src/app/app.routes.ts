import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      return '/home';
    },
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./screens/home/home.component').then((m) => m.HomeComponent),
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
    ],
  },

  {
    path: 'auth',
    loadComponent: () =>
      import('./screens/auth/auth.component').then((m) => m.AuthComponent),
  },
];
