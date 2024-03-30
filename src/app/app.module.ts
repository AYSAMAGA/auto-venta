import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './Paginas/PaginaModule';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './Interceptores/UserInterceptor.service';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginaModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
