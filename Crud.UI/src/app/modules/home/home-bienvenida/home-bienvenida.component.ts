import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-bienvenida',
  templateUrl: './home-bienvenida.component.html',
  styleUrl: './home-bienvenida.component.scss'
})
export class HomeBienvenidaComponent {
  constructor(private router: Router) {}

  goToAdminFrutas() {
    this.router.navigate(['/administracion-frutas']).then(() => {
      window.location.reload(); // Recarga la página al navegar
    });
  }
}
