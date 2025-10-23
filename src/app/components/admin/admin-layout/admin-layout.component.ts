import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  // État initial : le menu est affiché (non rétracté)
  isCollapsed = false;

  menus = [
    {
      icon: 'dashboard',
      label: 'Tableau de bord',
      route: '/admin/dashboard',
    },
    {
      icon: 'people',
      label: 'Utilisateurs',
      route: '/admin/users',
    },
    {
      icon: 'subscriptions',
      label: 'Abonnements',
      route: '/admin/subscriptions',
    },
    {
      icon: 'settings',
      label: 'Paramètres',
      route: '/admin/settings',
    },
  ];

  constructor() {}

  /**
   * Bascule l'état du menu entre rétracté (icônes) et complet (labels + icônes).
   */
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
