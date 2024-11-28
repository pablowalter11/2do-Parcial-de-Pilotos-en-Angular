import { Component, inject, OnInit } from '@angular/core';
import { PilotoService } from '../../services/piloto.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Piloto } from '../../interfaces/piloto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-pilot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-pilot.component.html',
  styleUrl: './update-pilot.component.css'
})
export class UpdatePilotComponent implements OnInit{
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next: (param) => {
          this.id = param.get('id')
          this.getPilotoById(this.id)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )    
  }

  pilotoService = inject(PilotoService)
  fb = inject(FormBuilder)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  id: string | null = null

  form = this.fb.nonNullable.group(
    {
      nombre: ['', Validators.required],
      escuderia_debut: ['', Validators.required],
      escuderia_actual: '',
      anio_debut: [0, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear())]],
      grandes_premios: [0, [Validators.required, Validators.min(0)]],
      podios: [0, [Validators.required, Validators.min(0)]],
      activo: false
    }
  )

  getPilotoById(id: string | null) {
    this.pilotoService.getPilotoById(id).subscribe(
      {
        next:(piloto: Piloto) => {
          this.form.controls['nombre'].setValue(piloto.nombre),
          this.form.controls['escuderia_debut'].setValue(piloto.escuderia_debut),
          this.form.controls['escuderia_actual'].setValue(piloto.escuderia_actual),
          this.form.controls['anio_debut'].setValue(piloto.anio_debut),
          this.form.controls['grandes_premios'].setValue(piloto.grandes_premios),
          this.form.controls['podios'].setValue(piloto.podios),
          this.form.controls['activo'].setValue(piloto.activo)

          console.log(piloto.nombre)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }

  updatePiloto() {
    if (this.form.invalid) return

    const piloto = this.form.getRawValue()

    this.pilotoService.putPiloto(piloto,this.id).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/list')
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
