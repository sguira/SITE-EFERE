import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {

  users:any=[]

  constructor(public admin:AdminService){}

  ngOnInit(): void {

    this.admin.getUsers().subscribe((e)=>{
      console.log(e)
      this.users=e
    })

  }

}
