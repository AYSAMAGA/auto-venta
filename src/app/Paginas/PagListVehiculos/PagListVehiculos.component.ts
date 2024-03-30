import { Component, OnInit, Input } from '@angular/core';
import { VehiculoService } from '../../Servicios/Vehiculo.service';

@Component({
  selector: 'app-PagListVehiculos',
  templateUrl: './PagListVehiculos.component.html',
  styleUrls: ['./PagListVehiculos.component.css']
})
export class PagListVehiculosComponent implements OnInit {

  mostrarImagen = true;
  private _filtro: string = "";

  @Input() valor: string = "";
  listaVehiculos: Array<any> = [];

  get filtro() {
    return this._filtro;
  }

  set filtro(data: string) {
    this._filtro = data;
    this.consultaVehiculos();
  }

  constructor(
  private vehiculoServices: VehiculoService
  ) { }
  
  ngOnInit() {
    this.consultaVehiculos();
  }

  mostrar() {
    this.mostrarImagen = !this.mostrarImagen;
  }

  consultaVehiculos() {
    this.vehiculoServices.getVehiculos().subscribe(data => {
      this.listaVehiculos = data;
    });
  }

  recepcion(dato: number) {
    console.log("Dato:", dato);
  }
}
