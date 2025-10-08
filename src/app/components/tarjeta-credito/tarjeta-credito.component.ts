import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  imports: [CommonModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent {
  listTarjetas: any[] = [
    { titular: 'Juan Perez', numeroTarjeta: '1234 5678 9012 3456', fechaExpiracion: '12/24', cvv: '123' },
    { titular: 'Maria Lopez', numeroTarjeta: '9876 5432 1098 7654', fechaExpiracion: '11/23', cvv: '456' }
  ];


}
