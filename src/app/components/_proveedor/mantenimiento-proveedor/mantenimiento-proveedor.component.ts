import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-mantenimiento-proveedor',
  templateUrl: './mantenimiento-proveedor.component.html',
  styleUrls: ['./mantenimiento-proveedor.component.css']
})
export class MantenimientoProveedorComponent {
  proveedor: Proveedor | null = null;
  codigoBusqueda: string = '';

  constructor(private proveedorService: ProveedorService) { }
  async buscarProveedor(): Promise<void> {
    try {
      this.proveedor = await this.proveedorService.getProveedorByCode(this.codigoBusqueda);
    } catch (error) {
      console.error('Error al obtener Proveedor:', error);
    }
  }

  limpiarBusqueda(): void {
    this.proveedor = null;
    this.codigoBusqueda = '';
  }

  editarProveedor(): void {
    // Aquí puedes agregar la lógica para editar el proveedor
    // utilizando this.proveedor para acceder a los valores del proveedor actual
    // Por ejemplo:
    // if (this.proveedor) {
    //   console.log('Editar proveedor:', this.proveedor);
    // }
  }

  eliminarProveedor(): void {
    // Aquí puedes agregar la lógica para eliminar el proveedor
    // utilizando this.proveedor para acceder a los valores del proveedor actual
    // Por ejemplo:
    // if (this.proveedor) {
    //   console.log('Eliminar proveedor:', this.proveedor);
    // }
  }

}
