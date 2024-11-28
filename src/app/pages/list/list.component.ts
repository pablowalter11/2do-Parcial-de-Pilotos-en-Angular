import { Component } from '@angular/core';
import { ListPilotComponent } from '../../components/list-pilot/list-pilot.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListPilotComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
