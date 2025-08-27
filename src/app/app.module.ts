import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';
import { HeaderComponent } from './composant/header/header.component';
import { LoadingComponent } from './widget/loading/loading.component';
import { FaqComponent } from './component/faq/faq.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './composant/header/header.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HeaderCarouselComponent } from './component/header-carousel/header-carousel.component';
import { ContactComponent } from './component/contact/contact.component';
import { AproposComponent } from './component/apropos/apropos.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
// import { FaqComponent } from './component/faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpRequest } from '@angular/common/http';
import { LoadingInterceptorInterceptor } from './loading-interceptor.interceptor';
// import { LoadingComponent } from './widget/loading/loading.component';
// import { FooterComponent } from './component/footer/footer.component';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { LoginComponent } from './component/admin/login/login.component';
// import { AdminComponent } from './component/admin/admin.component';
import {MatCardModule} from '@angular/material/card';
import { ListUserComponent } from './component/admin/list-user/list-user.component';
import { UserComponent } from './component/admin/user/user.component';
import { SuscribeComponent } from './component/admin/suscribe/suscribe.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './component/admin/user-details/user-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SidebarComponent } from './component/admin/sidebar/sidebar.component'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminComponent,
    HeaderComponent,
    LoadingComponent,
    FaqComponent,
    HeaderCarouselComponent,
    ContactComponent,
    AproposComponent,
    ConnexionComponent,
    ScrollAnimationDirective,
    LoginComponent,
    ListUserComponent,
    UserComponent,
    SuscribeComponent,
    AccueilComponent,
    UserDetailsComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
