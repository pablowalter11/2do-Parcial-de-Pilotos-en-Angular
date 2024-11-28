import { PilotoService } from './../../services/piloto.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Piloto } from '../../interfaces/piloto.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-pilot',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-pilot.component.html',
  styleUrl: './card-pilot.component.css'
})
export class CardPilotComponent {
  @Input()
  piloto!: Piloto

  pilotoService = inject(PilotoService)
  route = inject(Router)

  delete(id: any) {
    this.pilotoService.deleteById(id).subscribe(
      {
        next: () => {
          this.route.navigateByUrl('')
            .then( () => {
              this.route.navigateByUrl('/list')
            })
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
