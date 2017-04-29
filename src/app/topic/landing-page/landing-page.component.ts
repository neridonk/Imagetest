import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Topic, Images } from 'models';
import { ParentClass } from 'components';
import { NameListService } from '../../global/services/name-list.service';

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

  constructor(
    private router: Router,
    private nameListService: NameListService)
  {
    super();



    setTimeout(() =>
    {
      this.isAni = 'bounceInDown';
    },800);

    setTimeout(() =>
    {
      this.amazingAni = 'fadeInRight';
    }, 1600);
}

  ngAfterViewInit()
  {
    setTimeout(() =>
    {

      if (document.getElementById('logosy') == null)
        return;

      document.getElementById('logosy').style.width = '20%';
      document.getElementById('logosy').style.opacity = '1';
      document.getElementById('logosy').style.minWidth = '200px';

    }, 800);

  }


}
