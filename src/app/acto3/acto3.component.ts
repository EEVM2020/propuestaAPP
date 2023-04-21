import { Component } from '@angular/core';
import { ModalIngrsoService } from '../inicio-sesion/inicio-sesion-service';
import { SesionService } from '../servicios/sesion.service';
import { Back } from '../modelos/back';

@Component({
  selector: 'app-acto3',
  templateUrl: './acto3.component.html',
  styleUrls: ['./acto3.component.css']
})
export class Acto3Component {
  mostrarDatos ;
  objeto: Back;
  constructor(private modalIngresoService: ModalIngrsoService,private sesionService:SesionService) {
    this.objeto = this.sesionService.obtenerObjeto();
    this.mostrarDatos = false;
    if (this.objeto.sesionValida) {
      this.mostrarDatos = true;
      this.objeto.mostrarDatos = true;
    }
  }

  ngOnInit(): void {
    this.modalIngresoService.notificarIngreso.subscribe((mostrar) => {
      return this.mostrarDatos = mostrar;
    })
  }
}
