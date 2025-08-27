import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuscribeComponent } from '../suscribe/suscribe.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})


export class UserComponent {

  @Input()
  user:any
  // current:Date=new Date().getDate();
  constructor(public dialog:MatDialog,public router:Router){

  }

  suscribeDialog(){
    const config=new DialogConfig()
    config.autoFocus=true;
    // console.log("Ok")
    const btnElement=document.activeElement as HTMLElement;
    btnElement.blur()
    this.dialog.open(SuscribeComponent);

    // dialogref.afterClosed().subscribe(result=>{
    //   console.log(result)
    // })
  }

  showDetails(id:string){
    this.router.navigate(['/users',id])
  }

}
