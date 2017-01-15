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
  private registerUser: User = new User();
  private registerStep: number = -1;

  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }


  ngOnInit()
  {


  }

  register() {

    this.nameListService.register(this.newuser).subscribe(
      data => {
        this.registerStep =100;
      },
      err => alert(JSON.stringify(err))

    );
  }

  nextStep()
  {
    if(this.registerStep==2)
    {
      this.register();
      return;
    }

    this.registerStep +=1;
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




