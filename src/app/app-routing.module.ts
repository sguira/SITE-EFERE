import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/admin/login/login.component';
import { ListUserComponent } from './component/admin/list-user/list-user.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ContactComponent } from './component/contact/contact.component';
import { AproposComponent } from './component/apropos/apropos.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { FaqComponent } from './component/faq/faq.component';
import { UserDetailsComponent } from './component/admin/user-details/user-details.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './guard/admin.guard';
import { AdminService } from './service/admin.service';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'tarifs',
    component: TarifsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'apropos',
    component: AproposComponent,
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },

  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    // resolve: { preload: AdminService },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: ListUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
