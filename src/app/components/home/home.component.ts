import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaltantesComponent } from '../faltantes/faltantes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FaltantesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
