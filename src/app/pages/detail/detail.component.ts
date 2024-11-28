import { Component } from '@angular/core';
import { DetailPilotComponent } from '../../components/detail-pilot/detail-pilot.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DetailPilotComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
