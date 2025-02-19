import { Component, Input, OnInit } from '@angular/core';
import {
  FrutaData,
  FrutaDataPost,
  FrutaDataPut,
} from '../../models/fruta.model';
import { FrutasService } from '../../services/frutas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla-gestion-fruta',
  templateUrl: './tabla-gestion-fruta.component.html',
  styleUrls: ['./tabla-gestion-fruta.component.scss'],
})
export class TablaGestionFrutaComponent implements OnInit {
  @Input() frutasDataModal: FrutaData[] = [];

  frutasDialog: boolean = false;
  editFrutaDialog: boolean = false;

  selectedFruta: FrutaData | null = null;

  frutaSeleccionada!: FrutaData;// Contiene la fruta seleccionada para edición
  frutaForm!: FormGroup;

  constructor(private frutasService: FrutasService, private fb: FormBuilder,private msg: MessageService) {}

  ngOnInit(): void {
    this.frutaForm = this.fb.group({
      id: [null], // Se usa solo en edición
      nombreFruta: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      precioUnitario: [0, [Validators.required, Validators.min(1)]],
      proveedor: ['', Validators.required],
    });
    this.loadFrutas();
  }

  /** Cargar todas las frutas */
  loadFrutas(): void {
    this.frutasService.getFrutasData().subscribe((frutas) => {
      this.frutasDataModal = frutas;
    });
  }

  /** Abrir modal para nueva fruta */
  openNew(): void {
    this.frutaForm.reset();
    this.frutasDialog = true;
  }

  // Método para abrir el diálogo de edición con la fruta seleccionada
  openEdit(fruta: FrutaData) {
    this.frutaSeleccionada = { ...fruta };
    this.frutaForm.patchValue({
      id: fruta.id,
      nombreFruta: fruta.nombreFruta,
      cantidad: fruta.cantidad,
      precioUnitario: fruta.precioUnitario,
      proveedor: fruta.proveedor,
    });
    this.editFrutaDialog = true;
  }
  // Método para guardar una nueva fruta
  saveFruta() {
    if (this.frutaForm.valid) {
      const fruta: FrutaDataPost = this.frutaForm.value;
      this.frutasService.insertFruta(fruta).subscribe({
        next: () => {
          this.frutasDialog = false;
          this.loadFrutas();
          this.msg.add({ severity: 'success', summary: 'Success', detail: 'Fruta insertada correctamente' });
        },
        error: () => {
          this.msg.add({ severity: 'error', summary: 'Error', detail: 'Error al insertar la fruta' });
        }
      });
    }
  }

  // Método para actualizar una fruta
  updateFruta() {
    if (this.frutaForm.valid) {
      const frutaPut: FrutaDataPut = { ...this.frutaForm.value, id: this.frutaSeleccionada.id };
      
      this.frutasService.updateFruta(frutaPut).subscribe({
        next: () => {
          this.editFrutaDialog = false;
          this.loadFrutas();
          this.msg.add({ severity: 'success', summary: 'Success', detail: 'Fruta actualizada correctamente' });
        },
        error: () => {
          this.msg.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar la fruta' });
        }
      });
    }
  }

  /** Eliminar fruta */
  deleteFruta(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta fruta?')) {
      this.frutasService.deleteFruta(id).subscribe({
        next: () => {
          this.loadFrutas();
          this.msg.add({ severity: 'success', summary: 'Success', detail: 'Fruta eliminada correctamente' });
        },
        error: () => {
          this.msg.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la fruta' });
        }
      });
    }
  }
}
