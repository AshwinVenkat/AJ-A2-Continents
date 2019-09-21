import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './apollo.config';
import { ContinentsComponent } from './continents/continents.component';
import { ContinentComponent } from './continents/continent/continent.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    ContinentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
