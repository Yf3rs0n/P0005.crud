import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

import { AdministracionFrutasRoutingModule } from './administracion-frutas-routing.module';
import { AdministracionFrutasComponent } from './administracion-frutas.component';
import { TablaGestionFrutaComponent } from '../components/tabla-gestion-fruta/tabla-gestion-fruta.component';

@NgModule({
  declarations: [
    AdministracionFrutasComponent,
    TablaGestionFrutaComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    AdministracionFrutasRoutingModule,
    InputTextareaModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdministracionFrutasModule {}
