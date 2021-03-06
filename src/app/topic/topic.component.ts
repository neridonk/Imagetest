﻿import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'models';
import { ParentClass } from 'components';
import { NameListService } from '../global/services/name-list.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent extends ParentClass implements AfterViewInit
{
  public showRegister: boolean = false;

  constructor(
    private router: Router,
    private nameListService: NameListService)
  {
    super();
  }

  ngAfterViewInit()
  {
    if (this.cst() == null)
    {
      this.showRegister = true;
    }
  }

  public goToProfile()
  {
    if (this.cst() == null)
    {
      this.router.navigate(['/login']);
      return;
    }

    this.nameListService.getUserbyCst(this.cst()).subscribe(
      data =>
      {
        this.router.navigate(['/profile', data.userid]);
      },
      err => alert(JSON.stringify(err))
    );


  }

}
