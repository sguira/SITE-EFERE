import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface CarouselItem {
  titre: string;
  header: string;
  body: string;
  image: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }), // Commence légèrement en dessous et transparent
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })), // Vient en place
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })) // Disparaît vers le haut
      ])
    ])
  ]
})



export class UserDetailsComponent {

  indexCarousel: number = 0;

  carouselBody: CarouselItem[] = [
    {
      titre: 'Clients',
      header: 'Gestion de vos clients',
      body: 'Suivez toutes les informations de vos clients, leur historique d\'achats, et communiquez efficacement avec eux.',
      image: 'assets/images/clients.png' // Assurez-vous que les chemins d'images sont corrects
    },
    {
      titre: 'Fournisseurs',
      header: 'Optimisez vos relations fournisseurs',
      body: 'Centralisez les données de vos fournisseurs, gérez les bons de commande et facilitez vos approvisionnements.',
      image: 'assets/images/fournisseurs.png'
    },
    {
      titre: 'Stocks',
      header: 'Contrôlez votre inventaire',
      body: 'Gérez vos stocks en temps réel, suivez les entrées et sorties, et évitez les ruptures ou les surstocks.',
      image: 'assets/images/stocks.png'
    },
    {
      titre: 'Comptabilité',
      header: 'Simplifiez votre comptabilité',
      body: 'Enregistrez vos transactions, générez des rapports financiers et gardez un œil sur la santé de votre entreprise.',
      image: 'assets/images/comptabilite.png'
    },
    {
      titre: 'Commandes',
      header: 'Suivi et gestion des commandes',
      body: 'Créez, modifiez et suivez le statut de toutes vos commandes clients et fournisseurs en un clin d\'œil.',
      image: 'assets/images/commandes.png'
    }
  ];

  selectCarousel(index: number): void {
    this.indexCarousel = index;
    // Si vous aviez un auto-défilement, vous voudriez le réinitialiser ici
    // this.resetAutoSlide();
  }

  private autoSlideInterval: any;

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.indexCarousel = (this.indexCarousel + 1) % this.carouselBody.length;
    }, 5000); // Change toutes les 5 secondes
  }

  resetAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval); // Nettoyer l'intervalle à la destruction du composant
  }

  userId?:string
  user:any=null
  currentSection="client"
  _snackBar=inject(MatSnackBar)
  constructor(public router:ActivatedRoute,public admin:AdminService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.params.subscribe(params => {
      this.userId=params['id'];
      this.admin.getUsers(this.userId).subscribe(data=>{
        this.user=data;
        console.log(data)
      })
    })
  }

  changeCurrentSection(value:string){
    this.currentSection=value
  }

  showSnackBar(){
    this._snackBar.open('Vente effacée')
  }

  deleteVente(id:string){
    if(id!=null){
      this.admin.deleteData(id,'/admin/delete-vente').subscribe((e)=>{
        for(let i=0;i<this.user.ventes;i++){
          if(this.user.ventes[i].id==id){
            this.user.ventes.slice(i,1)
          }
        }
      })
    }
  }

}
