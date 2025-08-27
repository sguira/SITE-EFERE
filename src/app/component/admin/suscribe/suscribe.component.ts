import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-suscribe',
  template:"passed in {{data.data}}",
  templateUrl: './suscribe.component.html',
  styleUrls: ['./suscribe.component.scss']
})
export class SuscribeComponent {
  dialogRef=inject(MatDialogRef<SuscribeComponent>);
  data=inject(MAT_DIALOG_DATA);
  // readonly
  constructor(){

  }
}
