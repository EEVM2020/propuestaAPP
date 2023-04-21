import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { Acto1Component } from './acto1/acto1.component';
import { Acto2Component } from './acto2/acto2.component';
import { Acto3Component } from './acto3/acto3.component';
import { Acto4Component } from './acto4/acto4.component';
import {HttpClientModule} from '@angular/common/http';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    Acto1Component,
    Acto2Component,
    Acto3Component,
    Acto4Component,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
