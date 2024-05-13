import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), RouterOutlet, RouterLink, RouterModule]
};

