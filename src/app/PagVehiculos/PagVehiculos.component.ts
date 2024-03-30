import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../Utilitarios/modelos/Vehiculos';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../Servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-PagVehiculos',
  templateUrl: './PagVehiculos.component.html',
  styleUrls: ['./PagVehiculos.component.css']
})
export class PagVehiculosComponent implements OnInit {
  
  vehiculo?: Vehiculos;

  formulario: FormGroup |  undefined;

  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {  
      const codigo = params['codigo'];
      this.vehiculoService.getVehiculo(codigo).subscribe(resp => {
        this.vehiculo = resp.data;
      });
    });

    // Inicializar el formulario
    this.formulario = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      anio: [''],
      color: [''],
      kilometraje: [''],
      precio: [''],
      calificacion: ['']
    });
  }
}
