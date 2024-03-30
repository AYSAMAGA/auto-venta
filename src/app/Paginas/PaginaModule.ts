    
import { NgModule } from "@angular/core";
import { PagListVehiculosComponent } from "./PagListVehiculos/PagListVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../Utilitarios/UtilitariosModule";
import { PagVehiculosComponent } from "../PagVehiculos/PagVehiculos.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { PagListAutosComponent } from "./Home/PagListAutos/PagListAutos.component";
import { VehiculoDetalleComponent } from "./vehiculoDetalle/vehiculoDetalle.component";


    @NgModule({
        imports: [
            CommonModule,
            FormsModule,
            UtilitariosModule,
            RouterModule,
            ReactiveFormsModule
        ], 
        declarations: [
            PagVehiculosComponent,
            PagListVehiculosComponent,
            PagVehiculoRegistroComponent,
            PagListAutosComponent,
            VehiculoDetalleComponent 
            
        ], 
        exports: [
            PagVehiculosComponent,
            PagListVehiculosComponent,
            PagVehiculoRegistroComponent
        ] 
    })
    export class PaginaModule {

    }
