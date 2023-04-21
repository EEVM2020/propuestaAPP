import { Component } from '@angular/core';
import { ModalIngrsoService } from '../inicio-sesion/inicio-sesion-service';
import { SesionService } from '../servicios/sesion.service';
import { Back } from '../modelos/back';
@Component({
  selector: 'app-acto1',
  templateUrl: './acto1.component.html',
  styleUrls: ['./acto1.component.css']
})
export class Acto1Component {
  ocultar: boolean = true;
  rta: string = '';
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

  varificarRta() {
    if (this.removeAccents(this.rta.trim()).toLowerCase() == 'como aquella de quedarme sin tu amor'.trim()) {
      this.ocultar = false;
    }
    this.mostrarModal();

  }


  mostrarModal() {
    let btn: HTMLElement = document.getElementById('btnModal') as HTMLElement;
    btn.click();
  }

  removeAccents(texto: string) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }




}
