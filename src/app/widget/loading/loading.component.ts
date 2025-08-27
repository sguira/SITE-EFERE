import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loading=false;

  constructor(private progressBarService: LoadingService) {}

  ngOnInit(): void {
    console.log("valeur deb:"+this.loading)
    this.progressBarService.$progress.subscribe(show => {
      this.loading = show;
    });
    console.log("valeur fin:"+this.loading)
  }

}
