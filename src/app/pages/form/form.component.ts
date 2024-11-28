import { Component } from '@angular/core';
import { FormPilotComponent } from '../../components/form-pilot/form-pilot.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormPilotComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
