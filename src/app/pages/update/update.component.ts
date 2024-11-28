import { Component } from '@angular/core';
import { UpdatePilotComponent } from '../../components/update-pilot/update-pilot.component';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [UpdatePilotComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

}
