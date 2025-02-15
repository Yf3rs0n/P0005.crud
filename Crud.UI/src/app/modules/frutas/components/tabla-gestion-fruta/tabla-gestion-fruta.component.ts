import { Component, Input } from '@angular/core';
import { FrutaData } from '../../models/fruta.model';

@Component({
  selector: 'app-tabla-gestion-fruta',
  templateUrl: './tabla-gestion-fruta.component.html',
  styleUrl: './tabla-gestion-fruta.component.scss'
})
export class TablaGestionFrutaComponent {
  @Input() frutasDataModal: FrutaData[] = [];

}
