import { Component } from '@angular/core';
import { ModalIngrsoService } from '../inicio-sesion/inicio-sesion-service';
import { SesionService } from '../servicios/sesion.service';
import { Back } from '../modelos/back';

@Component({
  selector: 'app-acto2',
  templateUrl: './acto2.component.html',
  styleUrls: ['./acto2.component.css']
})
export class Acto2Component {

  objeto: Back;
  mostrarDatos ;

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
