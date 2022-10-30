import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private storageService: StorageService, private router: Router) { }

  getUsername() {
    return this.storageService.getItem('username');
  }
  isLogged() {
    return this.storageService.getItem('username') ? true : false;
  }
  logout() {
    this.storageService.removeItem('username')
    this.router.navigate(['/home']);
  }
  isNotLogginURL() {
    return this.router.url === '/login' ? false : true;
  }
}
