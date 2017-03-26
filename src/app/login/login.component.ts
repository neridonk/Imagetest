import { Component, OnInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';
import { Images, Topic, User, croppData } from '../models';
import { NavbarComponent } from '../navbar/navbar.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  private newuser: User = new User();
  private registerUser: User = new User();
  private registerStep: number = -1;

  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }

  register()
  {
    this.nameListService.register(this.newuser).subscribe(
      data =>
      {
        this.registerStep = 100;
      },
      err => alert(JSON.stringify(err))

    );
  }

  nextStep()
  {
  if (this.registerStep == 3)
    {
      this.registerStep = -1;
      return;
    }


    if (this.registerStep == 2)
    {
      if (this.newuser.name == null ||
        this.newuser.password == null ||
        this.newuser.email.length == null
      )
      {
        window.alert("You have not filled all requirements");
        return;
      }

      this.register();
      this.registerStep += 1;
      return;
    }

    this.registerStep += 1;
  }


  login()
  {

    this.nameListService.login(this.newuser).subscribe(
      data =>
      {
        console.log(data + JSON.stringify(data))

        if (data == null)
          return alert("login failed");

        localStorage.setItem('userid', data.userid);
        NavbarComponent.userid = data.userid;
        this.router.navigate(['/']);


      },
      err => alert(JSON.stringify(err))

    );
  }



}
