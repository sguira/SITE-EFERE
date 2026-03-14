import { Component } from '@angular/core';

interface Feature {
  label: string;
  included?: boolean;
}

interface TarifPlan {
  title: string;
  price: number;
  currency?: string;
  period?: string;
  tag?: string;
  features: Feature[];
  ctaText?: string;
  link?: string;
}

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss'],
})
export class TarifsComponent {
  tarifs: TarifPlan[] = [
    {
      title: 'Mensuel',
      price: 3000,
      currency: 'FCFA',
      period: '/mois',
      features: [
        { label: 'Accès complet à efere', included: true },
        { label: 'Idéal pour tester notre solution', included: true },
        { label: 'Économies sur le long terme', included: false },
      ],
      ctaText: 'Démarrer maintenant',
      link: 'https://espace.efere.space',
    },
    {
      title: 'Trimestriel',
      price: 8000,
      currency: 'FCFA',
      period: '/3 mois',
      features: [
        { label: 'Accès complet à efere', included: true },
        { label: 'Économisez 1 000 FCFA', included: true },
        { label: 'Engagement flexible', included: true },
      ],
      ctaText: 'Choisir ce plan',
    },
    {
      title: 'Semestriel',
      price: 15000,
      currency: 'FCFA',
      period: '/6 mois',
      tag: 'Le Plus Populaire',
      features: [
        { label: 'Accès complet à efere', included: true },
        { label: 'Économisez 3 000 FCFA', included: true },
        { label: 'Support prioritaire', included: true },
      ],
      ctaText: "Je m'abonne (Économique)",
    },
    {
      title: 'Annuel',
      price: 25000,
      currency: 'FCFA',
      period: '/an',
      features: [
        { label: 'Accès complet à efere', included: true },
        { label: '<strong>Économisez 11 000 FCFA</strong>', included: true },
        { label: 'Le meilleur rapport qualité/prix', included: true },
      ],
      ctaText: 'Choisir le plan annuel',
    },
    {
      title: '24 Mois',
      price: 45000,
      currency: 'FCFA',
      period: '/2 ans',
      features: [
        { label: 'Accès complet à efere', included: true },
        { label: '<strong>Économisez 16 000 FCFA</strong>', included: true },
        { label: 'Le meilleur rapport qualité/prix', included: true },
      ],
      ctaText: 'Choisir le plan de 24 mois',
    },
    {
      title: '36 Mois',
      price: 65000,
      currency: 'FCFA',
      period: '/3 ans',
      features: [
        { label: 'Accès complet à efere', included: true },
        { label: '<strong>Économisez 21 000 FCFA</strong>', included: true },
        { label: 'Le meilleur rapport qualité/prix', included: true },
      ],
      ctaText: 'Choisir le plan de 36 mois',
    },
  ];
}
