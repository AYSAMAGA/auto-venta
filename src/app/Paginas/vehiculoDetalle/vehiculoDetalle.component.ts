import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router'; 
import { Vehiculos } from '../../Utilitarios/modelos/Vehiculos'; 
import { VehiculoService } from '../../Servicios/Vehiculo.service';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-vehiculoDetalle',
  templateUrl: './vehiculoDetalle.component.html',
  styleUrls: ['./vehiculoDetalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {
  vehiculo?: Vehiculos | undefined;
  formulario: FormGroup; 

  constructor(
    private activatedRoute: ActivatedRoute, 
    private vehiculoServices: VehiculoService,
    private formBuilder: FormBuilder,
  ) {
    this.formulario = this.formBuilder.group({ 
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "kilometraje": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "precio": [''],
      "calificacion": ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: { [x: string]: string; }) => {
      this.vehiculoServices.getVehiculo(params['codigo']).subscribe(data => {
        if (data.codigo == '1') {
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          } else {
          Swal.fire({
            title: "Mensaje de Alerta",
            text: "No se pudo cargar la información",
            icon: "error"
          });
        }
      });
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.vehiculoServices.actualizarVehiculo({...this.formulario.value}).subscribe(data => {
        if (data.codigo == '1') {
          Swal.fire({
            title: "Mensaje",
            text: "Vehículo actualizado con éxito",
            icon: "info"
          });
        } else {
          Swal.fire({
            title: "Mensaje",
            text: "No se pudo actualizar el vehículo",
            icon: "error"
          });
        }
      });
    } else {
      Swal.fire({
        title: "Mensaje",
        text: "Falta llenar campos",
        icon: "error"
      });
    }
  }
  
}