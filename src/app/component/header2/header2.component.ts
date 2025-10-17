import { Component } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component {

  menuItems=[
    {
      label:'Accueil',
      url:'/'
    },
    {
      label:'Tarifs',
      url:'/tarifs'
    },
    {
      label:'Contact',
      url:'contact'
    },
    {
      label:'Foire aux question',
      url:'faq'
    },
     {
      label:'Apropos',
      url:'apropos'
    }
  ]

}
