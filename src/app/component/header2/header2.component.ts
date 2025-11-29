import { Component } from '@angular/core';
declare var bootstrap: any;
import { environnement } from 'src/environnements/environnement';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component {

  espaceClientLink = environnement.espaceClientLink;

  menuItems = [
    {
      label: 'Accueil',
      url: '/',
    },
    {
      label: 'Tarifs',
      url: '/tarifs',
    },
    {
      label: 'Contact',
      url: 'contact',
    },
    {
      label: 'Foire aux question',
      url: 'faq',
    },
    {
      label: 'Apropos',
      url: 'apropos',
    },
  ];

  mdbCollapse = false;

  toggleCollapse() {
    this.mdbCollapse = !this.mdbCollapse;
  }

  gotoEspaceClient() {
    window.open('https://espace.efere.space', '_blank');
  }

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  }
}
