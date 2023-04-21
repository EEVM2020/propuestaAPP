import { Injectable,EventEmitter } from '@angular/core';
import { InicioSesionComponent } from './inicio-sesion.component';

@Injectable({
  providedIn: 'root'
})
export class ModalIngrsoService {

  constructor() { }
  public modal: boolean = false;
  public _notificarIngreso=new EventEmitter<any>();

  /*
  abrirModal() {
    this.iniciarSesion.validarSesionExiste();
  }*/

  cerrarModal() {
    this.modal = false;
  }
  get notificarIngreso():EventEmitter<any>{
    return this._notificarIngreso;
  }
}