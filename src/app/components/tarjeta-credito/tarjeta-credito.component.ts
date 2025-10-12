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




  listTarjetas: any[] = [];

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

    const nuevaTarjeta = {
      titulas: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    };
    this.tarjetaService.addTarjeta(nuevaTarjeta).subscribe(data => {
      this.toastr.success('Tarjeta registrada', 'La tarjeta fue registrada con exito!');
      this.obtenerTarjetas();
      this.form.reset();
    }, error => {
      console.log(error);
    });


  }

  /**
   * name
   */
  public eliminarTarjeta(index:number) {
    console.log(index);

    this.tarjetaService.deleteTarjeta(index).subscribe(data => {
      this.toastr.error('Tarjeta eliminada', 'La tarjeta fue eliminada con exito!');
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    });

  }

  /**
   * obtenerTarjetas
   */
  public obtenerTarjetas() {
    this.tarjetaService.getAllTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data.map((tarjeta: any) => ({
      id: tarjeta.id,
      titular: tarjeta.titulas, // <-- ojo, era 'titulas' mal escrito
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    }));
    }, error => {
      console.log(error);
    });
  }



}
