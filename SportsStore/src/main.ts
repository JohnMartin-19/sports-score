import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


//if (environment.production){
 // enableProdMode();
//}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
