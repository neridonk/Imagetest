﻿import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private nameListService: NameListService)
  {
    super();


  }


}
