import { Component } from '@angular/core';
import { environnement } from 'src/environnements/environnement';
declare var bootstrap: any;

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
      description:
        'Optimisez vos niveaux de stock, alertes et réapprovisionnements automatiques.',
    },
    {
      texte: 'Gestion Clients',
      icon: 'bi bi-people-fill', // 👥 icône de clients
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        "Centralisez les fiches clients et suivez l'historique des échanges.",
    },
    {
      texte: 'Gestion Fournisseurs',
      icon: 'bi bi-truck', // 🚚 icône de livraison / fournisseur
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        'Suivez fournisseurs, commandes et livraisons pour un approvisionnement fiable.',
    },
    {
      texte: 'Gestion Vente',
      icon: 'bi bi-cart-check', // 🛒 icône de vente
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        'Gérez les ventes, paiements et performances commerciales en temps réel.',
    },
    {
      texte: 'Gestion Achats',
      icon: 'bi bi-bag-check-fill', // 🛍️ icône d'achat
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        "Optimisez les commandes d'achat, validations et réceptions fournisseurs.",
    },
    {
      texte: 'Gestion Facture',
      icon: 'bi bi-receipt-cutoff', // 🧾 icône de facture
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        'Créez, envoyez et suivez les factures ; automatisez les relances.',
    },
    {
      texte: 'Comptabilité',
      icon: 'bi bi-cash-stack', // 💰 icône d’argent / comptabilité
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        'Automatisez la comptabilité, rapprochements et rapports financiers.',
    },
    {
      texte: 'Gestion Commande',
      icon: 'bi bi-clipboard-check', // 📋 icône de commande validée
      color: 'rgba(233, 233, 166, 0.73)',
      description:
        'Traitez les commandes du panier à la livraison en toute simplicité.',
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
        'Automatisez vos tâches de gestion de stocks, de facturation et de comptabilité avec Efere. Dites adieu aux longues heures de saisie manuelle et concentrez-vous sur ce qui compte vraiment : la croissance de votre entreprise.',
      icon: 'bi bi-clock-history',
    },
    {
      titre: 'Réduction des erreurs',
      description:
        'Grâce à l’automatisation et aux contrôles intégrés, Efere minimise les erreurs humaines dans la saisie, le calcul des totaux et la gestion des stocks. Vos données sont précises et fiables à tout moment.',
      icon: 'bi bi-shield-check',
    },
    {
      titre: 'Vision globale et en temps réel',
      description:
        'Suivez en temps réel vos ventes, vos achats, vos stocks et votre trésorerie. Les tableaux de bord intelligents d’Efere vous offrent une vue claire pour des décisions plus rapides et plus efficaces.',
      icon: 'bi bi-graph-up',
    },
    {
      titre: 'Satisfaction client renforcée',
      description:
        'Améliorez votre réactivité et offrez une meilleure expérience à vos clients grâce à une gestion fluide des commandes, livraisons et factures. Des clients satisfaits, c’est une entreprise qui prospère.',
      icon: 'bi bi-emoji-smile',
    },
    {
      titre: 'Sécurité et confidentialité des données',
      description:
        'Efere protège vos informations sensibles grâce à des sauvegardes automatiques et un chiffrement sécurisé. Vos données restent confidentielles et accessibles uniquement aux utilisateurs autorisés.',
      icon: 'bi bi-lock',
    },
    {
      titre: 'Accessibilité multiplateforme',
      description:
        'Accédez à votre application depuis n’importe où : ordinateur, tablette ou smartphone. Efere s’adapte à votre mode de travail, que vous soyez au bureau ou en déplacement.',
      icon: 'bi bi-laptop',
    },
    {
      titre: 'Analyse et reporting intelligents',
      description:
        'Générez automatiquement des rapports détaillés sur vos ventes, achats et performances. Transformez vos données en décisions stratégiques grâce à des analyses précises et intuitives.',
      icon: 'bi bi-bar-chart-line',
    },
    {
      titre: 'Collaboration simplifiée',
      description:
        'Donnez à vos collaborateurs les bons outils pour travailler efficacement ensemble. Efere permet de gérer plusieurs utilisateurs, rôles et accès pour une meilleure organisation interne.',
      icon: 'bi bi-people',
    },
  ];

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  }

  gotoEspaceClient() {
    window.open(environnement.espaceClientLink, '_blank');
  }
}
