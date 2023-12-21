import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title = 'gana-app';

  private http = inject(HttpClient);


  ngOnInit(){
    this.http.get<any[]>('./assets/bd.json').subscribe(data => {
      console.log(data);
      data[54].sorteos.push({test: "test"});
    });
  }
}
