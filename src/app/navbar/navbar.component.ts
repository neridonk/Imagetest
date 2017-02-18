import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameListService } from '../global/services/name-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public static userid = localStorage.getItem('userid');

  constructor(
    private router: Router,
    private nameListService: NameListService
  ) { }

  public goToProfile() {
      //Eine Quest Implementieren : mit coolen effekten pew pew eine neue quest ist availible 
    if (NavbarComponent.userid == null) {
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate(['/profile', localStorage.getItem('userid')]);
  }
}