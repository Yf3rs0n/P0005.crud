import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionFrutaComponent } from './modal-gestion-fruta.component';

describe('ModalGestionFrutaComponent', () => {
  let component: ModalGestionFrutaComponent;
  let fixture: ComponentFixture<ModalGestionFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalGestionFrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestionFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
