import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Back} from '../modelos/back';
import {SesionService} from '../servicios/sesion.service';
import { ModalIngrsoService } from '../inicio-sesion/inicio-sesion-service';



@Component({
  selector: 'app-acto4',
  templateUrl: './acto4.component.html',
  styleUrls: ['./acto4.component.css']
})
export class Acto4Component {

  fechaActual: string = new Date().toLocaleDateString();
  mostrarCupon: Boolean = false;
  generado: Boolean = false;
  texto: string = "ORIGINAL";
  back:Back=new Back();
  clave:string='';
  motrarCredenciales:boolean=false;
  mostrarDatos;
  objeto: Back;

  constructor(private sesionService:SesionService,private modalIngresoService:ModalIngrsoService) {
    this.back=this.sesionService.obtenerObjeto();
    this.generado=this.back.generado;
    this.texto=this.back.generado?'COPIA':'ORIGINAL';

    this.objeto=this.sesionService.obtenerObjeto();
    this.mostrarDatos=false;
    if(this.objeto.sesionValida){
      this.mostrarDatos=true;
    }

  }

  
  ngOnInit(): void {
    this.modalIngresoService.notificarIngreso.subscribe((mostrar)=>{
      return this.mostrarDatos=mostrar;
    }) 
  }

  generarCupon() {
    this.fechaActual = new Date().toLocaleDateString();
  }

  descargarCupon() {
    if (!this.generado) {
      this.generado = true;
      this.texto = "COPIA"
    }
    this.downloadPDF();
    if(!this.back.generado){
      this.generarModalAcceso(); 
    }
     
  }
  downloadPDF() {
    const DATA = document.getElementById('cuerpoCupon') ?? undefined;
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    if (DATA !== undefined) {
      html2canvas(DATA, options).then((canvas) => {

        const img = canvas.toDataURL('image/PNG');

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.save(`${this.texto}_Cupon.pdf`);
      });    
    }
  }

  generarModalAcceso(){
    this.clave=this.fechaActual.replaceAll('/','');
    this.back.clave=this.sesionService.encriptarClave(this.clave.toString());
    this.back.fechaGen=this.fechaActual;
    this.back.generado=true;
    this.back.usuario='Princesa';
    this.sesionService.setearObjeto(this.back);
    this.motrarCredenciales=true;
    let btn:HTMLElement= document.getElementById('btnModalCredenciales') as HTMLElement;
    btn.click();
    
  }

}
