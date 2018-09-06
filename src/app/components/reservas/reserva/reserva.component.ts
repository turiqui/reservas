import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { NgForm } from '@angular/forms';
import { Reserva } from '../../../models/reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  zonas: string[];

  constructor(private reservaService:ReservaService) { 

    this.zonas = ['Barra','Salón','Terraza'];

  }

  ngOnInit() {
    this.reservaService.getReservasList();
  }

  onSubmit(reservaForm:NgForm){
    if (reservaForm.value.$key == null){
      this.reservaService.insertReserva(reservaForm.value);
      this.resetForm(reservaForm);
    }else{
      this.reservaService.updateReserva(reservaForm.value);
    }
  }

  resetForm(reservaForm:NgForm){
    reservaForm.reset();
    this.reservaService.selectedReserva=new Reserva();
  }

}
