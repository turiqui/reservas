import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';

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

}
