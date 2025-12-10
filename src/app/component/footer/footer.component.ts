import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  openFacebook() {
  const appUrl = 'fb://page/110284311498904';              // ou 'fb://profile/PAGE_ID' ou 'fb://facewebmodal/f?href=https://www.facebook.com/e-fere'
  const webUrl = 'https://www.facebook.com/110284311498904';

  // Tentative d'ouverture de l'app
  window.location.href = appUrl;

  // Si l'app n'est pas installée, après un court délai on bascule vers le web
  setTimeout(() => { window.location.href = webUrl; }, 600);
}

}
