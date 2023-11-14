import { toastController } from '@ionic/core';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
//Importar service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class FormPage {

nombre ="";
telefono ="";
rut = "";


  constructor(private crud: CrudService,
              private toast: ToastController) { }

async agregar(txtRut:HTMLInputElement, txtNombre:HTMLInputElement, txtTelefono:HTMLInputElement)
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
    return;
  }
  else if(txtNombre.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message: 'El rut no fue especificado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
    return;
  }
  else if(txtTelefono.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message: 'El rut no fue especificado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
    return;
  }
  const datos = [{"Rut": txtRut.value,
                  "Nombre": txtNombre.value,
                  "Telefono": txtTelefono.value
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
      txtTelefono.value = "";

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
this.telefono = valor[0].telefono;

      //limpia las cajas de texto
      txtRut.value = "";
  }
  else 
  {
    this.nombre = "";
    this.telefono = "";
    const toast = await this.toast.create({
      message: 'El rut no fue encontrado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
  }
}
async eliminar()
{
  let rutEliminar = this.rut;
  if (rutEliminar.trim().length == 0)
  {
    
    const toast = await this.toast.create({
      message: 'El rut no fue especificado',
      duration: 2000,
      color : "danger",
      position: "middle"
    });
    toast.present();
  }
  else {
    const valor = await this.crud.rescatar(rutEliminar)
    if (valor == null)
    {
      const toast = await this.toast.create({
        message: 'El rut' + rutEliminar + 'no fue encontrado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else {
      this.crud.eliminar(rutEliminar)
      const toast = await this.toast.create({
        message: 'El rut' + rutEliminar + 'fue eliminado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
  }
     this.nombre = "";
    this.telefono = "";

}

}
