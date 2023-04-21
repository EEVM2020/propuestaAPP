import { Component, AfterViewInit,Injectable,EventEmitter } from '@angular/core';
import { SesionService } from "../servicios/sesion.service"
import { Back } from '../modelos/back';
import {ModalIngrsoService} from './inicio-sesion-service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class InicioSesionComponent {

  usuario: string = "";
  clave: string = "";
  errorCredenciales: boolean;
  camposIncompletos: boolean;
  mensajeValidacion: string = '';
  iconoValidacion: string = '';
  public mostrarContenido:boolean=false;
  ocultarModal:boolean=true;

  constructor(private sesionService: SesionService,private modalIngresoService:ModalIngrsoService) {
    this.errorCredenciales = false;
    this.camposIncompletos = false;
    this.mostrarContenido=false;
  }

  ngAfterViewInit() {
    this.validarSesionExiste();
  }

  iniciarSesion() {

    if (this.usuario.trim().length == 0 || this.clave.trim().length == 0) {
      this.camposIncompletos = true;
      this.mensajeValidacion = 'Favor completa los datos';
      this.iconoValidacion = 'warning';
      this.mostrarContenido=false;
    } else {
      if (this.sesionService.iniciarSesion(this.clave, this.usuario)) {
        let btn: HTMLElement = document.getElementById('btnModalSesion') as HTMLElement;
        btn.click();
        this.mostrarContenido=true;
        this.ocultarModal=true;
      } else {
        this.errorCredenciales = true;
        this.mensajeValidacion = 'Datos incorrectos';
        this.iconoValidacion = 'error';
        this.mostrarContenido=false;
      }
    }
    this.modalIngresoService._notificarIngreso.emit(this.mostrarContenido);
  }

  limpiarDatos() {
    this.errorCredenciales = false;
    this.camposIncompletos = false;
  }

  asignarClase(): string {

    return 'alert-danger';
  }

  validarSesionExiste() {
    let back: Back = this.sesionService.obtenerObjeto();
    if (!back.generado && back.sesionValida) {
      //this.ocultarModal=true;
    } else {
      back.sesionValida = false;
      this.sesionService.setearObjeto(back);
    }
    if (!back.sesionValida) {
      this.ocultarModal=false;
      let btn: HTMLElement = document.getElementById('btnModalSesion') as HTMLElement;
      btn.click();
    }

  }
}
