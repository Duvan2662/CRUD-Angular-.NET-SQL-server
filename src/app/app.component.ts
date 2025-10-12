import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [TarjetaCreditoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'CRUD';
}
