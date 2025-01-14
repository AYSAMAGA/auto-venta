import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./AEspacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AEspacioPipe ,
        CalificacionComponent
    ], 
    exports: [
        AEspacioPipe,
        CalificacionComponent
    ] 
})
export class UtilitariosModule {

}