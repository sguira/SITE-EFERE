import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  // standalone:true,
  // imports:[MatExpansionModule],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FaqComponent {


  panelOpenState: boolean = false

 faqs:any[]=[
  {
    titre:'Premier pas avec efere',
    description:'Pour utiliser Notre application pour la gestion de votre entreprise, vous avez la possibilité d\'installer l\'application sur toutes les plateformes',
    contents:[
      "Après avoir installer l'application",
      "Vous devez crée un compte en quelques clicks",
      "Pour créer un compte rendez-vous dans la partie créer un compte",
      "Remplissez le formulaire composé de deux parties, une partie sur le propriétaire et une autre partie sur la compagnie ou magasin dont vous voulez gérer.",
      "Après création pour reçevrez un mail de confirmation dans lequel il y'a le mot de passe de confirmation",
      "Pour votre prémière utilisation vous aurez droit à un mois d'utilisation gratuite."
    ],
    illustrations:[
      {
        titre:"Information Perssonelles",
        image:'../../../assets/Image/faqs/creer_compte_1.png'
      },
      {
        titre:"Information Entreprise ou Magasin",
        image:'../../../assets/Image/faqs/creer_compte_2.png'
      }
    ]
  },
  {
    titre:'Bien commencez avec efere',
    description:"Après la création de votre compte pour utilisez de manière efficace nous vous conseillons de faire ces étapes suivantes:",
    contents:[
      "Rendez vous la partie gestion des stock dépuis le menu principal.",
      "Remplissez les stocks catégorie et articles",
      "Nous vous conseillons d'ajouter une catégorie dont vous appellez Autre ou Inconnue ",
      "Veuillez ajouter les articles sous les catégories qui les définissent ou dans la categorie autre que vous avez crée pour les articles qui n'ont pas vraiment de catégorie",
      "Vous pouvez ajouter une catégorie Inconnue ou autre pour y ajouter les articles dont vous n'arrivez pas à catégoriser.",
      "Renseignez vos clients et fournisseurs si vous en avez"
    ],
    illustrations:[
      {
        titre:"Section Stock",
        image:'../../../assets/Image/faqs/gestion_stock_1.png'
      },
      {
        titre:"Ajout Categorie",
        image:'../../../assets/Image/faqs/gestion_stock_2.png'
      },
      {
        titre:"Ajout Article",
        image:'../../../assets/Image/faqs/gestion_stock_3.png'
      },
      {
        titre:"Ajout Client",
        image:'../../../assets/Image/faqs/gestion_stock_4.png'
      },
      {
        titre:"Ajout Fournisseur",
        image:'../../../assets/Image/faqs/gestion_stock_5.png'
      },
      {
        titre:"Articles régroupé en catégorie",
        image:'../../../assets/Image/faqs/gestion_stock_6.png'
      },

    ]
  },
  {
    titre:'Comment Enregistrer une Vente',
    description:"Après avoir remplir votre stock d'article il est simple d'enregistrer une vente \n pour cela vous allez effectuez les action suivantes",
    contents:[
      "Depuis la page d'accueil après la connexion vous avez directement un button Vendre ou vous pouvez vous rendre dans la partie opération et choisir Vendre",
      "Dans la page vente vous avez une liste des articles disponible il siffut d'ajouter un article dans votre panier avec la quantité souhaiter",
      "Après avoir remplir votre panier appuyer sur l'icone panier vous accéder à la page de validation de votre Vente",
      "Dans cette page de validation vous avez la liste des articles selectionnés vous pouvez les modifier les supprimer et aussi vider le panier",
      "Ensuite pour valider la vente il suffit de cliquer sur valider et renseigner les Informations concernant la vente.",
      "Après Validation de la vente il est possible générer et enregistrer le reçu au format pdf.",
      "Après la vente des données sont automatiquement mise à jour"


    ],
    illustrations:[
      {
        titre:"Vendre prémière page",
        image:'../../../assets/Image/faqs/vendre_1.png'
      },
      {
        titre:"Section Vente dans le menu opération",
        image:'../../../assets/Image/faqs/vendre_2.png'
      },
      {
        titre:"Selection article pour panier",
        image:'../../../assets/Image/faqs/vendre_3.png'
      },
      {
        titre:"Liste des articles dans le panier",
        image:'../../../assets/Image/faqs/vendre_4.png'
      },
      {
        titre:"Formulaire validation vente",
        image:'../../../assets/Image/faqs/vendre_5.png'
      }
    ]
  },
  {
    titre:'Comment Enregistrer un achat ?',
    description:"Il est assez simple pour effectuer un achat, dans cette application les achats répresente l'ensemble des dépenses pour approvisonner son stock par un biais d'un fournisseur pour les dépenses vous pouvez faire une dépense au lieu d'achat",
    contents:[
      "Depuis la page d'accueil après la connexion vous avez directement un button Acheter ou vous pouvez vous rendre dans la partie opération et choisir Acheter",
      "Dans la page achat vous avez un formulaire qui est composé de trois champs vous permettant de renseigner l'ensemble des choses acheté avec leur prix et quantité",
      "Après chaque ajout d'éléments vous avez la liste qui est automatiquement mise à jour avec le montant également",
      "Vous pouvez modifier ou supprimer chaque éléments ajouté à la liste",
      "Ensuite pour valider l'achat il suffit de cliquer sur valider et remplir le formulaire d'achat"


    ],
    illustrations:[
      {
        titre:"Acheter prémière page",
        image:'../../../assets/Image/faqs/vendre_1.png'
      },
      {
        titre:"Section Achat dans le menu opération",
        image:'../../../assets/Image/faqs/acheter_2.png'
      },
      {
        titre:"Menu de remplissage de la liste achat",
        image:'../../../assets/Image/faqs/acheter_3.png'
      },
      {
        titre:"Liste des articles acheté",
        image:'../../../assets/Image/faqs/acheter_4.png'
      },
      {
        titre:"Formulaire validation Achat",
        image:'../../../assets/Image/faqs/acheter_5.png'
      }
    ]
  },
  {
    titre:'Comment créer un devis ?',
    description:"Vous avez la possibilité de créer faciliment des devis que vous pourrez par la suite envoyer à vos clients. Pour cela vous devez faire les actions suivantes:",
    contents:[
     "Clickez sur le boutton Opération depuis le menu principal",
     "Dans la partie Opération clicker sur le button devis.",
     "Une fois dans la partie devis vous avez une liste d'article régroupé sous des catégorie, ajoutez les articles dans le devis avec la quantité souhaitée.",
     "Une fois un article ajouté dans le devis, vous pouvez ensuite les modifier ou les supprimer.",
     "Pour valider la création du devis vous devez ajouter quelques informations facultatives concernant le devis comme le nom du client et le titre associé au devis.",
     "Après avoir créer votre devis vous pouvez l'enregistrer en pdf ou l'envoyer par mail au client."
    ],
    illustrations:[
      {
        titre:"Ajout article dans devis",
        image:'../../../assets/Image/faqs/devis_1.png'
      },
      {
        titre:"Modifier un article dans devis",
        image:'../../../assets/Image/faqs/devis_2.png'
      },
      {
        titre:"Information sur le devis",
        image:'../../../assets/Image/faqs/devis_3.png'
      },

    ]
  },
  {
    titre:'Comment effectuer un remboursement de crédit ?',
    description:"Vous avez la possibilité de consulter les crédits concernant chaque vente et d'éffectuer un remboursement de crédit.",
    contents:[
     "Pour effectuer un remboursement de crédit veuillez vous rendre dans la section client",
     "Une fois dans la section client cherchez le clients concerné",
     "après avoir trouvé le client vous devez par la suite trouver l'opération concernée, vous avez la possibilité d'afficher par date afin de trouver facilement cette opération",
     "Après avoir trouvez l'opération faite un click dessus et vous serrez dans la partie details opération.",
     "Dans les details concernant l'opération vous avez une description globale sur cette opération à savoir la liste des articles et des payements déjà effectué.",
     "Cliquez sur le boutton remboursement puis renseignez la date et le montant."
    ],
    illustrations:[
      {
        titre:"Liste des clients",
        image:'../../../assets/Image/faqs/credit_1.png'
      },
      {
        titre:"Liste des opérations concernant un client",
        image:'../../../assets/Image/faqs/credit_2.png'
      },
      {
        titre:"Details d'une opération de vente",
        image:'../../../assets/Image/faqs/credit_3.png'
      },
      {
        titre:"Formulaire remboursement crédit",
        image:'../../../assets/Image/faqs/credit_4.png'
      },

    ]
  },
  {
    titre:'Comment effectuer un remboursement de dette ?',
    description:"Vous avez la possibilité de consulter les vos dettes concernant chaque achats et d'éffectuer un remboursement de dette.",
    contents:[
     "Pour effectuer un remboursement de dette veuillez vous rendre dans la section fournisseurs",
     "Une fois dans la section fournisseurs, cherchez le fournisseur concerné",
     "après avoir trouvé le fournisseur vous devez par la suite trouver l'opération concernée, vous avez la possibilité d'afficher par date afin de trouver facilement cette opération",
     "Après avoir trouvez l'opération faite un click dessus et vous serrez dans la partie details opération.",
     "Dans les details concernant l'opération vous avez une description globale sur cette opération à savoir la liste des articles et des payements déjà effectué.",
     "Cliquez sur le boutton remboursement puis renseignez la date et le montant."
    ],
    illustrations:[
      {
        titre:"Liste des fournisseurs",
        image:'../../../assets/Image/faqs/dette_1.png'
      },
      {
        titre:"Liste des opérations concernant un fournisseur",
        image:'../../../assets/Image/faqs/dette_2.png'
      },
      {
        titre:"Details d'une opération d'achat",
        image:'../../../assets/Image/faqs/dette_3.png'
      },
      {
        titre:"Formulaire remboursement dette",
        image:'../../../assets/Image/faqs/dette_4.png'
      },

    ]
  },

  {
    titre:'Comment faire un journal comptable ?',
    description:"Vous avez la possiblité de créer un journal comptable depuis votre application sur une période bien définis et enregistrer sous le format pdf",
    contents:[
     "Pour créer un journal comptable veuillez vous rendre dans la section journal comptable.",
     "Une fois dans la section journal comptable, vous avez la possibilité de choisir la période que vous voulez",
     "Ensuite choisir les opérations que vous voulez ajouter dans le jourbal ",
     "Après cela vous avez la liste de ces opération avec un resumé",
     "Cliquez sur imprimer pour voir la version pdf et enregistrer"
    ],
    illustrations:[
      {
        titre:"Menu droit",
        image:'../../../assets/Image/faqs/journal_1.png'
      },
      {
        titre:"Page journal avant selection",
        image:'../../../assets/Image/faqs/journal_2.png'
      },
      {
        titre:"Contenu journal",
        image:'../../../assets/Image/faqs/journal_3.png'
      }

    ]
  },
  {
    titre:'Comment faire un bilan ?',
    description:"Avec notre application vous pouvez faire un bilan qui vous permet de voir ce que vous avez depensez  ou vendu pendant une période.",
    contents:[
     "Pour faire un bilan  veuillez vous rendre dans la section bilan.",
     "Une fois dans la section bilan, vous avez la possibilité de choisir la période que vous voulez",
     "Cliquez sur le button Bilan pour faire le bilan",
     "Vous pouvez imprimer le bilan"
    ],
    illustrations:[
      {
        titre:"Accéder Bilan",
        image:'../../../assets/Image/faqs/bilan_1.png'
      },
      {
        titre:"Section Bilan",
        image:'../../../assets/Image/faqs/bilan_2.png'
      },
      {
        titre:"Résumer du Bilan",
        image:'../../../assets/Image/faqs/bilan_3.png'
      },

    ]
  },
  {
    titre:"Comment s'abonner ?",
    description:"Pour utiliser toutes les fonctionnalité de l'application efere vous aurez bésoin d'un abonnement dans cette section on vous montre comment faire cet abonnement",
    contents:[
     "Cliquer sur le button Menu depuis la page d'accueil, pour sélectionner le button Paramètre.",
     "Lorsque vous êtes dans la partie paramète sélectionner le button Abonnement",
     "Dans la fénêtre abonnement veuillez cliquer sur le button modifie",
     "Une dans la section modification abonnement vous devez choisir une période et saisir le numéro du compte à débiter et le moyen de payement."
    ],
    illustrations:[
      {
        titre:"Menu principal",
        image:'../../../assets/Image/faqs/abonnement_1.png'
      },
      {
        titre:"Abonnement",
        image:'../../../assets/Image/faqs/abonnement_2.png'
      },

      {
        titre:"Modification abonnement",
        image:'../../../assets/Image/faqs/abonnement_3.png'
      }

    ]
  },
 ]

}
