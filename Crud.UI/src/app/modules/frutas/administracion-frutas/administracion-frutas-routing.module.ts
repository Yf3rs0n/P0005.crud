import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionFrutasComponent } from './administracion-frutas.component';

const routes: Routes = [{ path: '', component: AdministracionFrutasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionFrutasRoutingModule { }
