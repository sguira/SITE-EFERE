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

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'apropos',
    component:AproposComponent
  },
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'admin',
    component:LoginComponent,
  },
  {
    path:'users',
    component:ListUserComponent
  },
  {
    path:'users/:id',
    component:UserDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
