import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { AdministracionFrutasRoutingModule } from './administracion-frutas-routing.module';
import { AdministracionFrutasComponent } from './administracion-frutas.component';
import { TablaGestionFrutaComponent } from '../components/tabla-gestion-fruta/tabla-gestion-fruta.component';
import { ModalGestionFrutaComponent } from '../components/modal-gestion-fruta/modal-gestion-fruta.component';


@NgModule({
  declarations: [
    AdministracionFrutasComponent,
    TablaGestionFrutaComponent,
    ModalGestionFrutaComponent,
  ],
  imports: [CommonModule, TableModule, AdministracionFrutasRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdministracionFrutasModule {}
