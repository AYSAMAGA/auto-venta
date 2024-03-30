import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../Servicios/Vehiculo.service';
import Swal from 'sweetalert2';
import { Vehiculos } from '../../../Utilitarios/modelos/Vehiculos';

@Component({
  selector: 'app-PagListAutos',
  templateUrl: './PagListAutos.component.html',
  styleUrls: ['./PagListAutos.component.css']
})
export class PagListAutosComponent implements OnInit {
  
  constructor(private vehiculoService: VehiculoService) { }

  public mostrarImagen = false;
  public listaVehiculos: Vehiculos[] = []; 
  public filtro = '';
  public codigoNuevo = 0;

  ngOnInit() {
    console.log('Ingreso a ejecutarse');
    this.consultarVehiculos();
  };

  consultarVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(respuesta => {
      console.log(respuesta);
      this.listaVehiculos = respuesta; 
    });
  }

  eliminar(codigo: string) {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      icon: "question"
    }).then((res) => {
      if (res.isConfirmed) {
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data => {
          if (data.codigo == '1') {
            this.consultarVehiculos();
            Swal.fire({
              title: "Mensaje",
              text: "Vehículo eliminado con éxito",
              icon: "success" 
            });
          }
        });
      }
    });
  }
}
