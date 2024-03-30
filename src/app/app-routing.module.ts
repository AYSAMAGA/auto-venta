import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/Home/Home.component';
import { PagListVehiculosComponent } from './Paginas/PagListVehiculos/PagListVehiculos.component';
import { PagVehiculosComponent } from './PagVehiculos/PagVehiculos.component';
import { PagVehiculoRegistroComponent } from './Paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';



const routes: Routes = [
  {
  path:"home",
  component: HomeComponent
  },
  {
    path:"vehiculos",
    component: PagListVehiculosComponent
  },
  {
    path:"vehiculo",
    component: PagVehiculoRegistroComponent
    
  },
  {
    path:"vehiculo/:codigo",
    component: PagVehiculosComponent
    
  },
  {
    path:"",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path:"**",
    component: HomeComponent,
    pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
