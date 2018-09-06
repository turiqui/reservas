import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservasList: AngularFireList<any>;
  selectedReserva: Reserva = new Reserva();

  constructor(private firebase:AngularFireDatabase) {

    this.selectedReserva.zona="";

   }

  getReservasList(){
    return this.reservasList=this.firebase.list('reservas');
  }

  insertReserva(reserva:Reserva){
    this.reservasList.push(
      {
        nombre: reserva.nombre,
        apellidos: reserva.apellidos,
        telefono: reserva.telefono,
        numComensalesTotal: reserva.numComensalesTotal,
        numComensalesNinios: reserva.numComensalesNinios,
        numComensalesAdultos: reserva.numComensalesAdultos,
        zona: reserva.zona,
        fechaHoraReserva: reserva.fechaHoraReserva,
        comentario: reserva.comentario
      }
    );
  }

  updateReserva(reserva:Reserva){
    this.reservasList.update(reserva.$key,
      {
        nombre: reserva.nombre,
        apellidos: reserva.apellidos,
        telefono: reserva.telefono,
        numComensalesTotal: reserva.numComensalesTotal,
        numComensalesNinios: reserva.numComensalesNinios,
        numComensalesAdultos: reserva.numComensalesAdultos,
        zona: reserva.zona,
        fechaHoraReserva: reserva.fechaHoraReserva,
        comentario: reserva.comentario
      }
    );
  }

  deleteReserva(reserva: Reserva){
    this.reservasList.remove(reserva.$key);
  }

}
