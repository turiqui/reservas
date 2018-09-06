import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../models/reserva';
import { ReservaService } from '../../../services/reserva.service';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrls: ['./reservas-list.component.css']
})
export class ReservasListComponent implements OnInit {

  reservasList: Reserva[];

  constructor(private reservaService:ReservaService) { }

  ngOnInit() {

    return this.reservaService.getReservasList()
      .snapshotChanges().subscribe(item => {
        this.reservasList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.reservasList.push(x as Reserva);
        });
      });
  }

}
