import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBienvenidaRoutingModule } from './home-bienvenida-routing.module';
import { HomeBienvenidaComponent } from './home-bienvenida.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LayoutModule } from '../../layout/layout.module';


@NgModule({
  declarations: [
    HomeBienvenidaComponent
  ],
  imports: [
    CommonModule,
    HomeBienvenidaRoutingModule,
    ButtonModule,
    CardModule,
    LayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeBienvenidaModule { }
