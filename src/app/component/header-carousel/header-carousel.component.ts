import {
  trigger,
  animate,
  transition,
  style,
  state,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss'],
  animations: [
    trigger('slideInOut', [
      // État initial (quand un nouvel élément arrive)
      state(
        'void',
        style({
          opacity: 0.5,
          transform: 'translateY(10px)',
        })
      ),

      // Transition lors de l'arrivée (le nouvel index s'affiche)
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),

      // Transition lors du départ (l'ancien index disparaît)
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),

    // Ancien @fadeInOut si vous le conservez pour des éléments internes
    // Assurez-vous d'utiliser @slideInOut sur la zone de contenu pour un meilleur effet.
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeaderCarouselComponent {
  indexCarousel = 0;

  carouselBody = [
    {
      titre: 'Gestion de Stock',

      image: '../../../assets/Image/stock.png',

      header: 'Suivi en Temps Réel et alerte approvisionnement',

      body: 'Suivez vos stocks en temps réel pour éviter les ruptures et les surstockages. Recevez des notifications automatiques lorsque le stock atteint un seuil minimum.',
    },

    {
      titre: 'Gestion des Ventes',

      image: '../../../assets/Image/panier.png',

      header: 'Création de Devis et de Factures',

      body: "Générez facilement des devis et des factures professionnels pour vos clients. Consultez l'historique complet de vos ventes pour une meilleure gestion.",
    },

    {
      titre: 'Gestion des Clients et Fournisseurs',

      image: '../../../assets/Image/clients.png',

      header: 'Base de Données Centralisée',

      body: 'Centralisez toutes les informations de vos clients et fournisseurs en un seul endroit. Gardez une trace de toutes les interactions et transactions avec vos clients et fournisseurs.',
    },

    {
      titre: 'Comptabilité Simplifiée',

      image: '../../../assets/Image/journal.png',

      header: 'Journal Comptable Automatisé ',

      body: 'Tenez automatiquement un journal comptable précis et Générez des rapports financiers détaillés pour une meilleure prise de décision.',
    },

    {
      titre: 'Gestion des Crédits',

      image: '../../../assets/Image/credit.png',

      header: 'Suivi des Crédits',

      body: 'Gérez les crédits accordés à vos clients avec des outils de suivi détaillés. Recevez des rappels automatiques pour les paiements en retard.',
    },

    {
      titre: 'Planification de la Journée',

      image: '../../../assets/Image/planification.png',

      header: 'Agenda Intégré',

      body: 'Planifiez votre journée et vos tâches avec un agenda intégré. Recevez des notifications et des rappels pour ne jamais manquer un rendez-vous important.',
    }, // { //   titre:'Vendre des articles', //   image:'../../../image/phone.png', //   header:'Ajouter plusieurs element dans un panier', //   body:'vous pouvez ajouter plusieurs articles dans un panier avant de passer à la vente et chaque article dans le panier peut être modifier comme vous voulez' // }
  ];

  selectCarousel(index: any) {
    setTimeout(() => {
      this.indexCarousel = index;
    }, 300);
  }
}
