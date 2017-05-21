import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Topic, Images } from 'models';
import { ParentClass } from 'components';
import { NameListService } from '../../global/services/name-list.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent extends ParentClass
{

  public changeAni = 'fadeInDown';
  public isAni;
  public amazingAni;
  public users: User[] = new Array();

  constructor(
    private router: Router,
    private nameListService: NameListService)
  {
    super();

    if (this.cst() != null)
    {
      this.router.navigate(['/t/all']);
      return;
    }


    this.nameListService.getSomeUsers().subscribe(
      data =>
      {
        this.users = data;
      },
      err => console.log(err)
    );

    setTimeout(() =>
    {
      this.isAni = 'bounceInDown';
    }, 3000);

  }

  ngAfterViewInit()
  {
    setTimeout(() =>
    {

      if (document.getElementById('logosy') == null)
        return;

      document.getElementById('logosy').style.width = '20%';
      document.getElementById('logosy').style.opacity = '1';

    }, 800);

  }


}
