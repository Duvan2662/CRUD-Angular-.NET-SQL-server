import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaServicesService } from '../../services/tarjeta-services.service';

@Component({
  selector: 'app-tarjeta-credito',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent {


  tarjetaClase= {
    titular: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
  }

  listTarjetas: any[] = [
    { titular: 'Juan Perez', numeroTarjeta: '1234 5678 9012 3456', fechaExpiracion: '12/24', cvv: '123' },
    { titular: 'Maria Lopez', numeroTarjeta: '9876 5432 1098 7654', fechaExpiracion: '11/23', cvv: '456' }
  ];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private tarjetaService: TarjetaServicesService
  )
  {
    this.form = this.fb.group({
    titular: ['',Validators.required],
    numeroTarjeta: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
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
    this.toastr.success('Tarjeta registrada', 'La tarjeta fue registrada con exito!');
    this.form.reset();

  }

  /**
   * name
   */
  public eliminarTarjeta(index:number) {
    this.listTarjetas.splice(index,1);
    this.toastr.error('Tarjeta eliminada', 'La tarjeta fue eliminada con exito!');
  }

  /**
   * obtenerTarjetas
   */
  public obtenerTarjetas() {
    this.tarjetaService.getAllTarjetas().subscribe(data => {
      console.log(data);
      for (let tarjeta of data) {
        this.listTarjetas.push({
          "titular":tarjeta.titulas,
          "numeroTarjeta":tarjeta.numeroTarjeta,
          "fechaExpiracion":tarjeta.fechaExpiracion,
          "cvv":tarjeta.cvv});
      }
    }, error => {
      console.log(error);
    });
  }



}
