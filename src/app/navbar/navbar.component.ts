import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public static userid = localStorage.getItem('userid');

  constructor(
    private router: Router
  ) { }

  public goToProfile() {

    if (NavbarComponent.userid == null) {
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate(['/profile', localStorage.getItem('userid')]);
  }
}