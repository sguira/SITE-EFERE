import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userForm?:FormGroup;
  showResponse:boolean=false;
  showError=false;
  constructor(public formBuilder:FormBuilder,private service:BackendService){}

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      message:['',Validators.required],
      phone:[''],
      subject:['']
    })
  }

  onContact(){
    const contact:Contact={
      name:this.userForm?.value.name,
      email:this.userForm?.value.email,
      message:this.userForm?.value.message,
      phone:this.userForm?.value.phone,
      subject:this.userForm?.value.subject
    }
    console.log(contact)
    if(this.userForm?.valid){
      console.log(this.userForm)
      this.service.sendMail(contact).subscribe((value:string)=>{
        console.log(value)
        if(value=="OK"){
          this.showResponse=true;
          setTimeout(()=>{
            this.showResponse=false;
          },5000)
        }
      },(error)=>{
        console.log("Error affichée: "+error)
        this.showError=true;
        setTimeout(()=>{
          this.showError=false;
        },5000)
      })
    }
  }

}
