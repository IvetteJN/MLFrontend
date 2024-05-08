import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ContactoService } from './services/contacto.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ContactoService]
};

