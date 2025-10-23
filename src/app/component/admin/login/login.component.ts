import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  fg?: FormGroup;

  constructor(
    public fb: FormBuilder,
    public admin: AdminService,
    public storage: StorageService,
    public router: Router
  ) {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  authentification() {
    if (this.fg?.valid) {
      this.admin
        .login(this.fg.value['email'], this.fg.value['password'])
        .then((e: any) => {
          console.log(e);
          if (e['code'] == 1) {
            this.storage.saveData('token', e['token']);
            console.log('Token saved:', e);
            this.router.navigateByUrl('/admin/dashboard');
          }
        });
    }
  }
}
