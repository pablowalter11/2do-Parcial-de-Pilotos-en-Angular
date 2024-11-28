import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PilotoService } from '../../services/piloto.service';
import { Piloto } from '../../interfaces/piloto.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-pilot',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-pilot.component.html',
  styleUrl: './form-pilot.component.css'
})
export class FormPilotComponent {

  fb = inject(FormBuilder)
  pilotoService = inject(PilotoService)
  router = inject(Router)

  form = this.fb.nonNullable.group(
    {
      nombre: ['', [Validators.required]],
      escuderia_debut: ['', [Validators.required]],
      escuderia_actual: '',
      anio_debut: [0, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear())]],
      grandes_premios: [0, [Validators.required, Validators.min(0)]],
      podios: [0, [Validators.required, Validators.min(0)]],
      activo: false,
    }
  )

  addPiloto() {
    if(this.form.invalid) return;

    const piloto = this.form.getRawValue()

    this.addPilotoBDD(piloto)
  }

  addPilotoBDD(piloto: Piloto) {
    this.pilotoService.postPiloto(piloto).subscribe(
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
