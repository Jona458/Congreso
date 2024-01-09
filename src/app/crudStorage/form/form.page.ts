import { Component} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';

//Importar service

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  
})
export class FormPage{

rol= "";
email= "";
horario= "";
fecha= "";
nombre = "";
telefono = "";
rut = "";
listado = [];
  constructor(private crud: CrudService,
              private toast: ToastController) { }
                   
async agregar(txtRut:HTMLInputElement,
              txtNombre:HTMLInputElement,
              txtRol:HTMLSelectElement, 
              txtTelefono:HTMLInputElement,
              txtCorreo:HTMLInputElement,
              txtHorario: HTMLSelectElement,
              txtFecha: HTMLSelectElement
              )
{
  //validar
  if(txtRut.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message: 'El rut no fue especificado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
  }
  else if(txtNombre.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message: 'El nombre no fue especificado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
  }
  else if(txtTelefono.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message: 'El telefono no fue especificado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
  }
else 
{
  const datos = [{"rut": txtRut.value,
                  "nombre": txtNombre.value,
                  "rol": txtRol.value,
                  "telefono": txtTelefono.value,
                  "email": txtCorreo.value,
                  "horario": txtHorario.value,
                  "fecha": txtFecha.value
                 }];
      await this.crud.agregar(datos); //agregar el dato al storage
      const toast = await this.toast.create({
        message: 'Los datos fueron gurdados',
        duration: 2000,
        color : "success",
        position: "middle"
      });
      toast.present();
       //limpia las cajas de texto
      txtRut.value = "";
      txtNombre.value = "";
      txtRol.value = "";
      txtCorreo.value = "";
      txtTelefono.value = "";
      txtHorario.value = "";
      txtFecha.value = "";
    }
      this.nombre = ""; //limpia la propiedad por ende la vita

}
async buscar(txtRut:HTMLInputElement)
{
  //retorna el valor encontrado (si existe)
  const valor = await this.crud.rescatar(txtRut.value)

  if (valor !=null)
  {
//muestra el valor encontrado
  this.rut = valor[0].rut;
  this.nombre = valor[0].nombre;
  this.rol = valor[0].rol;
  this.telefono = valor[0].telefono;
  this.email = valor[0].email;
  this.horario = valor[0].horario;
  this.fecha = valor[0].fecha;
      //limpia las cajas de texto
  txtRut.value == "";
  this.listado = []; //elimina la lista de la vista 
  }
  else 
  {
    this.nombre = "";
    this.rol ="";
    this.telefono = "";
    this.email = "";
    this.horario = "";
    this.fecha = "";
    const toast = await this.toast.create({
      message: 'El rut no fue encontrado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
  }
}
async eliminar(txtRut: HTMLInputElement)
{
  const valor = await this.crud.eliminar(txtRut.value)
  this.nombre = "";
  this.rol ="";
  this.telefono = "";
  this.email = "";
  this.horario = "";
  this.fecha = "";
  const toast = await this.toast.create({
    message: 'Se ha eliminado',
    duration: 2000,
    color : "danger",
    position: "middle"
  });
}
async listar ()
{
  //limpia la busqueda de la vista
  this.nombre = "";
  this.rol ="";
  this.telefono = "";
  this.email = "";
  this.horario = "";
  this.fecha = "";
  //muestra los datos registrados en el storage
  this.listado = this.crud.listar([]);
}
}