import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Images, Topic, User } from 'models';

import { ParentClass } from 'components';
import { NameListService } from '../global/services/name-list.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class DashOverviewComponent extends ParentClass implements OnInit
{

  constructor(private nameListService: NameListService)
  {
    super();
  }

  ngOnInit()
  {
  }

}
