import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura'
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  providers: [providePrimeNG({
      theme: {
        preset: Aura,
      }
    }),
    provideAnimations(),
    MessageService,
  ],
})
export class LayoutModule { }
