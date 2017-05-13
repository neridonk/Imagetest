import { Component, OnInit, NgZone } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';
import { Images, Topic, User, croppData } from '../models';
import { NavbarComponent } from '../navbar/navbar.component';
import { FacebookService } from './facebook.service';
import { Router } from '@angular/router';

declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  public newuser: User = new User();
  public registerUser: User = new User();
  public registerStep: number = -1;

  constructor(
    private ngZone: NgZone,
    private facebookService: FacebookService,
    private nameListService: NameListService,
    private router: Router
  ) { }

  ngOnInit()
  {
    this.facebookService.loadAndInitFBSDK();
  }

  loginFB()
  {
    FB.login((response) =>
    {
      if (response.authResponse)
      {
        FB.api('/me', (response) =>
        {
          this.ngZone.run(() =>
          {
            console.log(response);
          });
        });
      } else
      {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }


  register()
  {
    this.nameListService.register(this.newuser).subscribe(
      data =>
      {
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

        localStorage.setItem('cst', data.cst);
        NavbarComponent.userid = data.userid;

        location.href = '';

      },
      err => alert(JSON.stringify(err))

    );
  }



}
