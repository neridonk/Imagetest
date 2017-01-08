import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent { 

  public  userid  =  localStorage.getItem('userid');

  constructor(
    private router: Router
  ) { }

  public goToProfile()
  {
    this.router.navigate(['/profile', localStorage.getItem('userid') ]);
  }
}
