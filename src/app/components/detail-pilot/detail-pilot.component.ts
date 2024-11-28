import { Component, inject, OnInit } from '@angular/core';
import { Piloto } from '../../interfaces/piloto.interface';
import { ActivatedRoute } from '@angular/router';
import { PilotoService } from '../../services/piloto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-pilot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-pilot.component.html',
  styleUrl: './detail-pilot.component.css'
})
export class DetailPilotComponent implements OnInit{
  
  piloto!: Piloto
  id?: string | null 

  pilotoService = inject(PilotoService)
  activateRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      {
        next: (param) => {
          this.id = param.get('id')
          this.getPilotoById(this.id)
        }
      }
    )
  }

  getPilotoById(id: string | null) {
    this.pilotoService.getPilotoById(id).subscribe(
      {
        next: (piloto: Piloto) => {
          this.piloto = piloto
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
