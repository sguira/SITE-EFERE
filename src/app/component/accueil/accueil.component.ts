import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  fonctionnalite: Array<any> = [
    {
      texte: 'Gestion Stock',
      icon: 'bi bi-box-seam', // 📦 icône de stock / inventaire
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Gestion Clients',
      icon: 'bi bi-people-fill', // 👥 icône de clients
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Gestion Fournisseurs',
      icon: 'bi bi-truck', // 🚚 icône de livraison / fournisseur
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Gestion Vente',
      icon: 'bi bi-cart-check', // 🛒 icône de vente
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Gestion Achats',
      icon: 'bi bi-bag-check-fill', // 🛍️ icône d'achat
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Gestion Facture',
      icon: 'bi bi-receipt-cutoff', // 🧾 icône de facture
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Comptabilité',
      icon: 'bi bi-cash-stack', // 💰 icône d’argent / comptabilité
      color: 'rgba(233, 233, 166, 0.73)',
    },
    {
      texte: 'Gestion Commande',
      icon: 'bi bi-clipboard-check', // 📋 icône de commande validée
      color: 'rgba(233, 233, 166, 0.73)',
    },
  ];

  availables = [
    {
      texte: 'ios',
      icon: '../../../assets/icons/ios.png',
    },
    {
      texte: 'android',
      icon: '../../../assets/icons/android.png',
    },
    {
      texte: 'windows',
      icon: '../../../assets/icons/windows.png',
    },
    {
      texte: 'Web',
      icon: '../../../assets/icons/web.png',
    },
    {
      texte: 'Mac os',
      icon: '../../../assets/icons/macos.png',
    },
    {
      texte: 'Linux',
      icon: '../../../assets/icons/linux.png',
    },
  ];

  carouselContainer = [
    {
      titre: 'Vendre',
    },
  ];

  avantages = [
    {
      titre: 'Gain de temps considérable',
      description:
        "Avec efere, simplifiez et automatisez vos tâches quotidiennes de gestion de stock et de comptabilité. Libérez-vous des processus chronophages et concentrez-vous sur le développement de votre entreprise. Gagnez en efficacité et productivité dès aujourd'hui.",
      icon: '../../../assets/icons/clock.svg',
    },
    {
      titre: 'Gain de temps considérable',
      description:
        "Avec efere, simplifiez et automatisez vos tâches quotidiennes de gestion de stock et de comptabilité. Libérez-vous des processus chronophages et concentrez-vous sur le développement de votre entreprise. Gagnez en efficacité et productivité dès aujourd'hui.",
      icon: '../../../assets/icons/clock.svg',
    },
    {
      titre: 'Reduction des erreurs',
      description:
        "Avec efere, simplifiez et automatisez vos tâches quotidiennes de gestion de stock et de comptabilité. Libérez-vous des processus chronophages et concentrez-vous sur le développement de votre entreprise. Gagnez en efficacité et productivité dès aujourd'hui.",
      icon: '../../../assets/icons/lock.svg',
    },
    {
      titre: 'Satisfaction des clients',
      description:
        'Avec efere, offrez à vos clients une expérience fluide et professionnelle. Gérez leurs commandes avec précision, répondez rapidement à leurs besoins, et maintenez des relations solides. Des clients satisfaits sont la clé de votre succès.',
      icon: '../../../assets/icons/lock.svg',
    },
  ];
}
