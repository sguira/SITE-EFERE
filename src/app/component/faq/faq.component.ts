import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  // standalone:true,
  // imports:[MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  panelOpenState: boolean = false;

  faqs: any[] = [
    {
      titre: 'Premiers pas avec Efere',
      description:
        "Pour utiliser notre application de gestion de votre entreprise, vous pouvez l'installer sur toutes les plateformes.",
      contents: [
        "Après avoir installé l'application,",
        'vous devez créer un compte en quelques clics.',
        'Pour créer un compte, rendez-vous dans la section « Créer un compte ».',
        "Remplissez le formulaire composé de deux parties : une partie sur le propriétaire et une autre sur l'entreprise ou le magasin que vous souhaitez gérer.",
        'Après la création, vous recevrez un e-mail de confirmation contenant votre mot de passe.',
        "Pour votre première utilisation, vous bénéficiez d'un mois gratuit.",
      ],
      illustrations: [
        {
          titre: 'Informations personnelles',
          image: '../../../assets/Image/faqs/creer_compte_1.png',
        },
        {
          titre: 'Informations entreprise ou magasin',
          image: '../../../assets/Image/faqs/creer_compte_2.png',
        },
      ],
    },
    {
      titre: 'Bien commencer avec Efere',
      description:
        "Après la création de votre compte, pour l'utiliser de manière efficace, nous vous conseillons de suivre les étapes suivantes :",
      contents: [
        'Rendez-vous dans la section de gestion des stocks depuis le menu principal.',
        'Renseignez les catégories et les articles de votre stock.',
        "Nous vous conseillons d'ajouter une catégorie appelée « Autre » ou « Inconnue ».",
        'Ajoutez les articles dans les catégories correspondantes, ou dans la catégorie « Autre » que vous avez créée pour les articles sans catégorie précise.',
        'Vous pouvez utiliser la catégorie « Inconnue » ou « Autre » pour les articles difficiles à catégoriser.',
        'Renseignez vos clients et fournisseurs, si vous en avez.',
      ],
      illustrations: [
        {
          titre: 'Section Stock',
          image: '../../../assets/Image/faqs/gestion_stock_1.png',
        },
        {
          titre: 'Ajout catégorie',
          image: '../../../assets/Image/faqs/gestion_stock_2.png',
        },
        {
          titre: 'Ajout article',
          image: '../../../assets/Image/faqs/gestion_stock_3.png',
        },
        {
          titre: 'Ajout client',
          image: '../../../assets/Image/faqs/gestion_stock_4.png',
        },
        {
          titre: 'Ajout fournisseur',
          image: '../../../assets/Image/faqs/gestion_stock_5.png',
        },
        {
          titre: 'Articles regroupés en catégorie',
          image: '../../../assets/Image/faqs/gestion_stock_6.png',
        },
      ],
    },
    {
      titre: 'Comment enregistrer une vente ?',
      description:
        "Après avoir rempli votre stock d'articles, il est simple d'enregistrer une vente. Pour cela, effectuez les actions suivantes :",
      contents: [
        "Depuis la page d'accueil après connexion, vous avez directement un bouton « Vendre », ou vous pouvez vous rendre dans la section Opérations puis choisir « Vendre ».",
        "Dans la page Vente, vous avez une liste des articles disponibles ; il suffit d'ajouter un article dans votre panier avec la quantité souhaitée.",
        "Après avoir rempli votre panier, appuyez sur l'icône panier pour accéder à la page de validation de votre vente.",
        'Dans cette page de validation, vous avez la liste des articles sélectionnés ; vous pouvez les modifier, les supprimer et vider le panier.',
        'Ensuite, pour valider la vente, il suffit de cliquer sur Valider et de renseigner les informations concernant la vente.',
        'Après validation de la vente, il est possible de générer et d’enregistrer le reçu au format PDF.',
        'Après la vente, les données sont automatiquement mises à jour.',
      ],
      illustrations: [
        {
          titre: 'Vendre : première page',
          image: '../../../assets/Image/faqs/vendre_1.png',
        },
        {
          titre: 'Section Vente dans le menu Opérations',
          image: '../../../assets/Image/faqs/vendre_2.png',
        },
        {
          titre: 'Sélection d’articles pour le panier',
          image: '../../../assets/Image/faqs/vendre_3.png',
        },
        {
          titre: 'Liste des articles dans le panier',
          image: '../../../assets/Image/faqs/vendre_4.png',
        },
        {
          titre: 'Formulaire de validation de vente',
          image: '../../../assets/Image/faqs/vendre_5.png',
        },
      ],
    },
    {
      titre: 'Comment enregistrer un achat ?',
      description:
        "Il est assez simple d'effectuer un achat. Dans cette application, les achats représentent l'ensemble des dépenses pour approvisionner votre stock via un fournisseur. Pour les autres dépenses, vous pouvez enregistrer une dépense au lieu d'un achat.",
      contents: [
        "Depuis la page d'accueil après connexion, vous avez directement un bouton « Acheter », ou vous pouvez vous rendre dans la section Opérations puis choisir « Acheter ».",
        'Dans la page Achat, vous avez un formulaire composé de trois champs permettant de renseigner les éléments achetés, avec leur prix et leur quantité.',
        "Après chaque ajout d'élément, la liste est automatiquement mise à jour avec le montant.",
        'Vous pouvez modifier ou supprimer chaque élément ajouté à la liste.',
        "Ensuite, pour valider l'achat, il suffit de cliquer sur Valider et de remplir le formulaire d'achat.",
      ],
      illustrations: [
        {
          titre: 'Acheter : première page',
          image: '../../../assets/Image/faqs/vendre_1.png',
        },
        {
          titre: 'Section Achat dans le menu Opérations',
          image: '../../../assets/Image/faqs/acheter_2.png',
        },
        {
          titre: 'Menu de remplissage de la liste d’achat',
          image: '../../../assets/Image/faqs/acheter_3.png',
        },
        {
          titre: 'Liste des articles achetés',
          image: '../../../assets/Image/faqs/acheter_4.png',
        },
        {
          titre: 'Formulaire de validation d’achat',
          image: '../../../assets/Image/faqs/acheter_5.png',
        },
      ],
    },
    {
      titre: 'Comment créer un devis ?',
      description:
        'Vous avez la possibilité de créer facilement des devis que vous pourrez ensuite envoyer à vos clients. Pour cela, suivez les actions suivantes :',
      contents: [
        'Cliquez sur le bouton Opérations depuis le menu principal.',
        'Dans la section Opérations, cliquez sur le bouton Devis.',
        "Une fois dans la section Devis, vous avez une liste d'articles regroupés sous des catégories ; ajoutez les articles dans le devis avec la quantité souhaitée.",
        'Une fois un article ajouté au devis, vous pouvez ensuite le modifier ou le supprimer.',
        'Pour valider la création du devis vous devez ajouter quelques informations facultatives concernant le devis comme le nom du client et le titre associé au devis.',
        "Après avoir créé votre devis, vous pouvez l'enregistrer en PDF ou l'envoyer par e-mail au client.",
      ],
      illustrations: [
        {
          titre: 'Ajout d’article dans le devis',
          image: '../../../assets/Image/faqs/devis_1.png',
        },
        {
          titre: 'Modifier un article dans le devis',
          image: '../../../assets/Image/faqs/devis_2.png',
        },
        {
          titre: 'Informations sur le devis',
          image: '../../../assets/Image/faqs/devis_3.png',
        },
      ],
    },
    {
      titre: 'Comment effectuer un remboursement de crédit ?',
      description:
        "Vous avez la possibilité de consulter les crédits liés à chaque vente et d'effectuer un remboursement.",
      contents: [
        'Pour effectuer un remboursement de crédit, rendez-vous dans la section Clients.',
        'Une fois dans la section Clients, cherchez le client concerné.',
        "Après avoir trouvé le client, vous devez ensuite trouver l'opération concernée. Vous pouvez filtrer par date afin de la retrouver facilement.",
        "Après avoir trouvé l'opération, faites un clic dessus et vous serez dans la section Détails de l'opération.",
        "Dans les détails de l'opération, vous avez une description globale, notamment la liste des articles et des paiements déjà effectués.",
        'Cliquez sur le bouton Remboursement puis renseignez la date et le montant.',
      ],
      illustrations: [
        {
          titre: 'Liste des clients',
          image: '../../../assets/Image/faqs/credit_1.png',
        },
        {
          titre: 'Liste des opérations concernant un client',
          image: '../../../assets/Image/faqs/credit_2.png',
        },
        {
          titre: "Détails d'une opération de vente",
          image: '../../../assets/Image/faqs/credit_3.png',
        },
        {
          titre: 'Formulaire de remboursement de crédit',
          image: '../../../assets/Image/faqs/credit_4.png',
        },
      ],
    },
    {
      titre: 'Comment effectuer un remboursement de dette ?',
      description:
        "Vous avez la possibilité de consulter vos dettes liées à chaque achat et d'effectuer un remboursement.",
      contents: [
        'Pour effectuer un remboursement de dette, rendez-vous dans la section Fournisseurs.',
        'Une fois dans la section Fournisseurs, cherchez le fournisseur concerné.',
        "Après avoir trouvé le fournisseur, vous devez ensuite trouver l'opération concernée. Vous pouvez filtrer par date afin de la retrouver facilement.",
        "Après avoir trouvé l'opération, faites un clic dessus et vous serez dans la section Détails de l'opération.",
        "Dans les détails de l'opération, vous avez une description globale, notamment la liste des articles et des paiements déjà effectués.",
        'Cliquez sur le bouton Remboursement puis renseignez la date et le montant.',
      ],
      illustrations: [
        {
          titre: 'Liste des fournisseurs',
          image: '../../../assets/Image/faqs/dette_1.png',
        },
        {
          titre: 'Liste des opérations concernant un fournisseur',
          image: '../../../assets/Image/faqs/dette_2.png',
        },
        {
          titre: "Détails d'une opération d'achat",
          image: '../../../assets/Image/faqs/dette_3.png',
        },
        {
          titre: 'Formulaire de remboursement de dette',
          image: '../../../assets/Image/faqs/dette_4.png',
        },
      ],
    },

    {
      titre: 'Comment faire un journal comptable ?',
      description:
        'Vous avez la possibilité de créer un journal comptable depuis votre application sur une période bien définie et de l’enregistrer au format PDF.',
      contents: [
        'Pour créer un journal comptable veuillez vous rendre dans la section journal comptable.',
        'Une fois dans la section journal comptable, vous avez la possibilité de choisir la période que vous voulez',
        'Ensuite, choisissez les opérations que vous voulez ajouter dans le journal.',
        'Après cela, vous avez la liste de ces opérations avec un résumé.',
        'Cliquez sur Imprimer pour voir la version PDF et l’enregistrer.',
      ],
      illustrations: [
        {
          titre: 'Menu droit',
          image: '../../../assets/Image/faqs/journal_1.png',
        },
        {
          titre: 'Page journal avant sélection',
          image: '../../../assets/Image/faqs/journal_2.png',
        },
        {
          titre: 'Contenu du journal',
          image: '../../../assets/Image/faqs/journal_3.png',
        },
      ],
    },
    {
      titre: 'Comment faire un bilan ?',
      description:
        'Avec notre application, vous pouvez faire un bilan qui vous permet de voir ce que vous avez dépensé ou vendu pendant une période.',
      contents: [
        'Pour faire un bilan, veuillez vous rendre dans la section Bilan.',
        'Une fois dans la section bilan, vous avez la possibilité de choisir la période que vous voulez',
        'Cliquez sur le bouton Bilan pour générer le bilan.',
        'Vous pouvez imprimer le bilan.',
      ],
      illustrations: [
        {
          titre: 'Accéder au bilan',
          image: '../../../assets/Image/faqs/bilan_1.png',
        },
        {
          titre: 'Section Bilan',
          image: '../../../assets/Image/faqs/bilan_2.png',
        },
        {
          titre: 'Résumé du bilan',
          image: '../../../assets/Image/faqs/bilan_3.png',
        },
      ],
    },
    {
      titre: "Comment s'abonner ?",
      description:
        "Pour utiliser toutes les fonctionnalités de l'application Efere, vous aurez besoin d'un abonnement. Dans cette section, nous vous montrons comment procéder.",
      contents: [
        "Cliquez sur le bouton Menu depuis la page d'accueil, puis sélectionnez le bouton Paramètres.",
        'Lorsque vous êtes dans la section Paramètres, sélectionnez le bouton Abonnement.',
        'Dans la fenêtre Abonnement, veuillez cliquer sur le bouton Modifier.',
        'Une fois dans la << section modification abonnement >> vous devez choisir une offre et procéder au paiement.',
        'Il est possible de souscrire un abonnement en contactant notre service client via les numéros suivants : +225 07 08 06 76 17 / +225 07 88 08 12 86.',
      ],
      illustrations: [
        {
          titre: 'Menu principal',
          image: '../../../assets/Image/faqs/abonnement_1.png',
        },
        {
          titre: 'Abonnement',
          image: '../../../assets/Image/faqs/abonnement_2.png',
        },

        {
          titre: 'Modification abonnement',
          image: '../../../assets/Image/faqs/abonnement_3.png',
        },
      ],
    },
  ];
}
