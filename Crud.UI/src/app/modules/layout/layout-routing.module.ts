import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../home/home-bienvenida/home-bienvenida.module').then(
        (m) => m.HomeBienvenidaModule
      ),
  },
  {
    path: 'administracion-frutas',
    loadChildren: () =>
      import(
        '../frutas/administracion-frutas/administracion-frutas.module'
      ).then((m) => m.AdministracionFrutasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
