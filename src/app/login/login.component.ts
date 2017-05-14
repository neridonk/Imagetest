﻿import { Component, OnInit, NgZone } from '@angular/core';
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

    this.newuser.img = 'http://changeisamazing.com/assets/img/noImage.jpeg';
  }

  loginFB()
  {
    FB.login((response) =>
    {
      if (response.authResponse)
      {
        FB.api('/me', { locale: 'en_US', fields: 'id,name,first_name,last_name,email,link,gender,locale,picture' }, (response) =>
        {
          this.ngZone.run(() =>
          {
            this.newuser.name = response.name;
            this.newuser.password = "sd$fgtok" + response.first_name + "jokas44§" + response.id + "34562" + response.name;
            this.newuser.email = response.email;
            this.newuser.img = 'http://graph.facebook.com/+' + response.id + '/picture?width=300&height=300';
            this.nameListService.login(this.newuser).subscribe(
              data =>
              {
                if (data == null)
                {
                  this.nameListService.register(this.newuser).subscribe(
                    data =>
                    {
                      this.login();
                    },
                    err => alert(JSON.stringify(err))
                  );
                  return;
                }

                localStorage.setItem('cst', data.cst);
                NavbarComponent.userid = data.userid;

                location.href = '';
              },
              err => alert(JSON.stringify(err)));
          });
        });
      } else
      {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'email' });
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
