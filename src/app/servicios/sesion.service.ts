import { Injectable } from '@angular/core';
import { Back } from '../modelos/back';
import * as CryptoJS from 'crypto-js';


@Injectable({
    providedIn: 'root'
})
export class SesionService {


    iniciarSesion(clave: string, usuario: String) {
        let objeto: Back = new Back();
        let encriptado: string;
        encriptado = this.encriptarClave(clave);
        objeto = this.obtenerObjeto();
        if (objeto.generado) {
            if (objeto.clave.trim() === encriptado && objeto.usuario.trim() == usuario.trim()) {
                objeto.sesionValida = true;
                this.setearObjeto(objeto);
                return true;
            }
        } else {
            return true;
        }
        return false;
    }


    setearObjeto(back: Back) {
        localStorage.setItem('back', JSON.stringify(back));
    }

    obtenerObjeto(): Back {
        let objeto = localStorage.getItem('back');
        if (objeto) {
            return JSON.parse(objeto) as Back;
        }
        return new Back();
    }

    encriptarClave(clave: string): string {
        return CryptoJS.RIPEMD160(clave.toString()).toString();
    }

}