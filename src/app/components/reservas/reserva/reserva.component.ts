import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private reservaService:ReservaService) { }

  ngOnInit() {
    this.reservaService.getReservasList();
  }

}
