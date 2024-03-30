import { Injectable } from '@angular/core';
import { Vehiculos } from "../Utilitarios/modelos/Vehiculos";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://epico.gob.ec/vehiculo/public/api/";
           
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getVehiculos(): Observable<Vehiculos[]> {
    return this.http.get<any>(this.baseUrl + "vehiculos/").pipe(
      map(respuesta => respuesta.data)
    );
  }
  
  insertVehiculos(vehiculo: Vehiculos): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo, this.httpOptions);
  }

  getVehiculo(codigo: string): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
  }

  actualizarVehiculo(vehiculo: Vehiculos): Observable<Respuesta> {
    const codigo = vehiculo.codigo;
    return this.http.put<Respuesta>(this.baseUrl + "vehiculo/" + codigo, vehiculo, this.httpOptions);
  }

  addVehiculo(vehiculo: Vehiculos): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo, this.httpOptions);
  }

  eliminarVehiculo(codigo:string){
    return this.http.delete<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
  }

}

export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Vehiculos | Vehiculos[] | any;
}





/*getVehiculo(codigo: string): Observable<Vehiculos> {
  return this.http.get<Vehiculos>(this.baseUrl + "vehiculo/" + codigo);
}*/


 /* getVehiculos(filtro: any):Observable<Array< Vehiculos>>  {
    const escucha: Observable<Array<Vehiculos> >= new Observable(escuchando =>{
      let lista= this.listaVehiculos.filter (ele => ele.marca.toLowerCase().includes(filtro.toLowerCase))
      escuchando.next( lista);
    });
    return escucha;
  }

  getVehiculo(codigo: string): Observable<Vehiculos | undefined> {
    const escucha: Observable<Vehiculos | undefined> = new Observable (escuchando =>{
      setTimeout(() => {
        let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo);
        escuchando.next(vehiculo);//next,error,complete
      }, 1000);
    });
    return escucha;
  } 

  

  addVehiculo(vehiculo: Vehiculos): void {
    this.listaVehiculos.push(vehiculo);
  }
}

function getVehiculo(codigo: any, string: any) {
  throw new Error('Function not implemented.');
} */