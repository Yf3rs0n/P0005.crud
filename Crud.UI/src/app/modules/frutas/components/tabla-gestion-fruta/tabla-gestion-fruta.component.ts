import { Component, Input, input } from '@angular/core';
import { FrutaData } from '../../models/fruta.model';

@Component({
  selector: 'app-tabla-gestion-fruta',
  standalone: false,
  templateUrl: './tabla-gestion-fruta.component.html',
  styleUrl: './tabla-gestion-fruta.component.scss'
})
export class TablaGestionFrutaComponent {
  @Input() frutasDataModal: FrutaData[] = [];


  stockSeverity(product: FrutaData) {
    if (product.cantidad === 0) return 'danger';
    else if (product.cantidad > 0 && product.cantidad < 10) return 'warn';
    else return 'success';
}
}
