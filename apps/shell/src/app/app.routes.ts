import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () => import('products/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'basket',
    loadChildren: () => import('basket/Routes').then((m) => m!.remoteRoutes),
  },
];
