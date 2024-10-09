import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tareas: string[] = []; // Lista de tareas
  nuevaTarea: string = ''; // Variable para la nueva tarea

  constructor(private tareaService: TareasService) {}

  // Obtener la lista de tareas cuando la página se carga o se vuelve visible
  async ionViewWillEnter() {
    this.tareas = await this.tareaService.obtenerTareas();
  }
  // Agregar una tarea y actualizar la lista de tareas
  async agregarTarea() {
    if (this.nuevaTarea.trim().length > 0) { // Validar que no esté vacía
      await this.tareaService.agregarTarea(this.nuevaTarea); // Agrega la nueva tarea
      this.nuevaTarea = ''; // Limpiar el campo de la nueva tarea
      this.tareas = await this.tareaService.obtenerTareas(); // Actualizar la lista de tareas
    }
  }

}
