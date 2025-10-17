import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {


  isOpened=false;


  changeSteHeader(){
    this.isOpened=!this.isOpened;
  }

  menuItems=[
    {name:"Accueil",link:""},
    {name:"Fonctionnalités",link:"fonctionnalites"},
    {name:"Tarifs",link:"tarifs"},
    {name:"Contact",link:"contact"},
    {name:"Espace Client",link:"",isButton:true},
    {name:"Apropos",link:"/apropos"}
  ]

  openSpace(){
    window.open("https://efferay-web.onrender.com/","blank")
  }

}
