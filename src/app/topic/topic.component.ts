import { Component, OnInit, AfterViewInit } from '@angular/core';
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
    if (this.userId() == 0)
    {
      this.showRegister = true;
    }
  }

  public goToProfile()
  {
    //Eine Quest Implementieren : mit coolen effekten pew pew eine neue quest ist availible 
    if (this.userId() == 0)
    {
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate(['/profile', this.userId()]);
  }

}
