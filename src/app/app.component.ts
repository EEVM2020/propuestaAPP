import { Component } from '@angular/core';
import { ModalIngrsoService } from './inicio-sesion/inicio-sesion-service';
import { SesionService } from './servicios/sesion.service';
import { Back } from './modelos/back';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propuestaApp';
  sesionValida: boolean = true;
  objeto: Back;

  mostrarDatos;

  constructor(private modalIngresoService: ModalIngrsoService,private sesionService: SesionService) {
    this.objeto=this.sesionService.obtenerObjeto();
    this.mostrarDatos=false;
    if(this.objeto.sesionValida){
      this.mostrarDatos=true;
      this.objeto.mostrarDatos=true;
    }
    this.sesionService.setearObjeto(this.objeto);
  }

  ngOnInit(): void {
    this.modalIngresoService.notificarIngreso.subscribe((mostrar) => {
      return this.mostrarDatos = mostrar;
    })


  }





}
