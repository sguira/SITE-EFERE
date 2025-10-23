import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vitrine-copy';

  constructor(private router: Router) {}

  viewHeader = true;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      const url = window.location.href;
      console.log(url);
      if (url.includes('admin')) {
        window.scrollTo(0, 0);
        this.viewHeader = false;
      }
    });
  }
}
