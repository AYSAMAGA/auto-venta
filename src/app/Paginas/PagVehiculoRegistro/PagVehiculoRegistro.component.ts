import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { VehiculoService } from '../../Servicios/Vehiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute,
  ) {
    this.formulario = this.formBuilder.group({
      codigo: ['', [Validators.required]], 
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      kilometraje: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      precio: [],
      calificacion: ['', [Validators.required]],
    });
    
    //this.formulario.setValidators(this.validadorCodigoComparativ());
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(param =>{
      let codigo = param['codigo'];
      this.vehiculoServicio.getVehiculo
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.vehiculoServicio.insertVehiculos(this.formulario.value).subscribe(
        (respuesta: any) => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: 'Mensaje',
              text: 'Vehiculo Registrado con Éxito',
              icon: 'success',
            }).then(() => {
              this.formulario.reset();
            });
          } else {
            Swal.fire({
              title: 'Mensaje',
              text: 'No se pudo registrar el vehiculo: ' + respuesta.mensaje,
              icon: 'error'
            });
          }
        },
        error => {
          Swal.fire({
            title: 'Mensaje',
            text: 'Error al enviar el formulario: ' + error,
            icon: 'error'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Mensaje',
        text: 'Falta llenar campos?',
        icon: 'error'
      });
    }
  }
  validadorCodigoComparativo() {
    return (formulario: FormGroup) => {
      const valor = formulario.get('codigo')?.value; 
      const valor2 = formulario.get('codigo_confirma')?.value; 
      if (valor === valor2) {
        return null;
      }
      return { codigoComparativo: true };
    };
  }

}


