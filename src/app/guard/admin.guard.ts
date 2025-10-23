import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../service/storage.service';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private storage: StorageService,
    private router: Router,
    private Admin: AdminService
  ) {}

  canActivate(): boolean {
    if (this.Admin.IsConnected.getValue() == true) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
