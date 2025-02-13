import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionFrutasRoutingModule } from './administracion-frutas-routing.module';
import { AdministracionFrutasComponent } from './administracion-frutas.component';
import { TablaGestionFrutaComponent } from '../components/tabla-gestion-fruta/tabla-gestion-fruta.component';
import { ModalGestionFrutaComponent } from '../components/modal-gestion-fruta/modal-gestion-fruta.component';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { LayoutModule } from '../../layout/layout.module';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AdministracionFrutasComponent,
    TablaGestionFrutaComponent,
    ModalGestionFrutaComponent
  ],
  imports: [
    CommonModule,
    AdministracionFrutasRoutingModule,
    ToastModule,
    TableModule,
    LayoutModule,
    BadgeModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdministracionFrutasModule { }
