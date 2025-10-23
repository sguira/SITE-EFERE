import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-glass-modal',
  templateUrl: './glass-modal.component.html',
  styleUrls: ['./glass-modal.component.scss'],
})
export class GlassModalComponent {
  // Propriété pour contrôler l'état d'ouverture/fermeture
  @Input() isOpen: boolean = false;

  // Événement émis lors de la fermeture du modal
  @Output() closed = new EventEmitter<void>();

  constructor() {}

  /**
   * Ferme le modal.
   */
  closeModal(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  /**
   * Ferme le modal si le clic est sur l'arrière-plan (et non sur le contenu).
   * @param event L'événement de clic
   */
  closeOnOutsideClick(event: MouseEvent): void {
    // Si la cible du clic est le conteneur principal (le div de classe 'modal'), fermer
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}
