import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { ReservasListComponent } from './components/reservas/reservas-list/reservas-list.component';
import { ReservaComponent } from './components/reservas/reserva/reserva.component';
import { ReservasComponent } from './components/reservas/reservas.component';

//Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

//Service
import { ReservaService } from './services/reserva.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservasListComponent,
    ReservaComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
