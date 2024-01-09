import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage){
    //crear el storage para el usuario
    this.init();
  }
  //crea el storage
  async init()
  {
    await this.storage.create();
  }
  //ingresar datos al storage con key
  async agregarConKey(key: string, valor: string)
  {
    await this.storage.set(key, valor);
  }
  //ingresar datos al storage key autoincrementable
  async agregar(valor:string)
  {
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(), valor);
  }
  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
  {
    let listado = []
    this.storage.forEach((v,k) => {listado.push(v); })
    
  }
  eliminar(key:string)
  {
    this.storage.remove(key);
  }
}