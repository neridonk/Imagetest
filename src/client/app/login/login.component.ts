import { Component, OnInit } from '@angular/core';
import { NameListService,NavbarComponent } from '../shared/index';
import { croppData } from '../models/cropperModel';
import { Images, Topic, User } from '../models/AllModels';

import { Router } from '@angular/router';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'loginPanel',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit
{



  private newuser: User = new User();

  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }


  ngOnInit()
  {


  }


  login()
  {

    this.nameListService.login(this.newuser).subscribe(
      data =>
      {
        console.log(data + JSON.stringify(data))

        if (data == null)
          return alert("login failed");

          localStorage.setItem('userid',data.userid);
          location.href = '/overview';

      },
      err => alert(JSON.stringify(err))

    );
  }



}




