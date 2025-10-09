import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent {

  listTarjetas: any[] = [
    { titular: 'Juan Perez', numeroTarjeta: '1234 5678 9012 3456', fechaExpiracion: '12/24', cvv: '123' },
    { titular: 'Maria Lopez', numeroTarjeta: '9876 5432 1098 7654', fechaExpiracion: '11/23', cvv: '456' }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['',Validators.required],
      numeroTarjeta: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });

  }

  /**
   * name
   */
  public agregarTarjeta() {
    console.log(this.form.value);

    const nuevaTarjeta = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    };
    console.log(nuevaTarjeta);

    this.listTarjetas.push(nuevaTarjeta);
    this.form.reset();

  }

  

}
