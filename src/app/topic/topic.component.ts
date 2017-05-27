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

  constructor(
    private router: Router,
    public nameListService: NameListService)
  {
    super();


  }

  ngAfterViewInit()
  {
  }

  public goToProfile()
  {
    if (this.cst() == null)
    {
      location.href = "/login"
      return;
    }

    this.nameListService.getUserbyCst(this.cst()).subscribe(
      data =>
      {
        location.href = "/t/profile/" + data.userid;
      },
      err => alert(JSON.stringify(err))
    );


  }

}
