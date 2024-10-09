import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
//Asegúrate de que Storage esté importado desde

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  //creamos una variable
  private _storage: Storage | null = null;


  constructor(private storage: Storage) { 
    this.init();
    //Inicializa el almacenamiento antes de usarlo.
  }
   // Inicializa el almacenamiento
   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Función para agregar una tarea
  async agregarTarea(tarea: string): Promise<void> {
    const tareas = await this.obtenerTareas();
    tareas.push(tarea);
    await this._storage?.set('tareas', tareas);
  }

  // Función para obtener todas las tareas almacenadas
  async obtenerTareas(): Promise<string[]> {
    const tareas = await this._storage?.get('tareas');
    return tareas || [];
    //Recupera las tareas del almacenamiento y devuelve el array de tareas,
  }
}
