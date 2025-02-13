import { Component } from '@angular/core';
import { FrutaData } from '../models/fruta.model';
import { FrutasService } from '../services/frutas.service';

@Component({
  selector: 'app-administracion-frutas',
  standalone: false,
  templateUrl: './administracion-frutas.component.html',
  styleUrl: './administracion-frutas.component.scss'
})
export class AdministracionFrutasComponent {
  frutasData: FrutaData[] = [];


  constructor(private frutasService: FrutasService) { }
  ngOnInit(): void {
    this.obtenerFrutas();
  }

  obtenerFrutas(): void {
    this.frutasService.getFrutasData().subscribe(
      (data: FrutaData[]) => {
        this.frutasData = data;
        console.log('frutas:', this.frutasData);
      },
      (error) => {
        console.error('Error al obtener frutas:', error);
      }
    );
  }
}
