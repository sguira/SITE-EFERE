import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  fonctionnalite:Array<any>=[
    {
      texte:'Gestion Stock',
      image:'../../../assets/icons/stock.png',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Gestion Clients',
      image:'../../../assets/icons/client.gif',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Gestion Fournisseus',
      image:'../../../assets/icons/fournisseurs.png',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Gestion Vente',
      image:'../../../assets/icons/ventes.png',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Gestion Achats',
      image:'../../../assets/icons/achats.png',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Gestion Facture',
      image:'../../../assets/icons/facture.png',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Comptabilité',
      image:'../../../assets/icons/ventes.png',
      color:'rgba(233, 233, 166, 0.73)'
    },
    {
      texte:'Gestion commande',
      image:'../../../assets/icons/achats.png',
      color:'rgba(233, 233, 166, 0.73)'
    }
  ]

  availables=[
    {
      texte:'ios',
      icon:'../../../assets/icons/ios.png'
    },
    {
      texte:'android',
      icon:'../../../assets/icons/android.png'
    },
    {
      texte:'windows',
      icon:'../../../assets/icons/windows.png'
    },
    {
      texte:'Web',
      icon:'../../../assets/icons/web.png'
    },
    {
      texte:'Mac os',
      icon:'../../../assets/icons/macos.png'
    },
    {
      texte:'Linux',
      icon:'../../../assets/icons/linux.png'
    }
  ]

  carouselContainer=[
    {
      titre:'Vendre'
    }
  ]

  // constructor(){
  //   const tl=new ViewTimeline({
  //     subject:document.getElementById('image-ordi')
  //   })

  // }

}
