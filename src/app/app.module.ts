import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservasListComponent } from './components/reservas/reservas-list/reservas-list.component';
import { ReservaComponent } from './components/reservas/reserva/reserva.component';
import { ReservasComponent } from './components/reservas/reservas.component';

import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    ReservasListComponent,
    ReservaComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
