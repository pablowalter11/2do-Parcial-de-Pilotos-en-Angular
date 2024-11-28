import { Piloto } from './../../interfaces/piloto.interface';
import { Component, inject, OnInit } from '@angular/core';
import { PilotoService } from '../../services/piloto.service';
import { CommonModule } from '@angular/common';
import { CardPilotComponent } from '../card-pilot/card-pilot.component';

@Component({
  selector: 'app-list-pilot',
  standalone: true,
  imports: [CommonModule, CardPilotComponent],
  templateUrl: './list-pilot.component.html',
  styleUrl: './list-pilot.component.css'
})
export class ListPilotComponent implements OnInit{
  ngOnInit(): void {
    this.listarPilotos()
  }

  listaPilotos: Piloto[] = []

  pilotoService = inject(PilotoService)

  listarPilotos() {
    this.pilotoService.getPilotos().subscribe(
      {
        next: (pilotos: Piloto[]) => {
          this.listaPilotos = pilotos
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      },
    )
  }
}
