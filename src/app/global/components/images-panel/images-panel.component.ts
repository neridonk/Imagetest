﻿import { Component, OnInit, AfterViewInit, Input,NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Images, Topic, User, croppData } from '../../../models';
import { NameListService } from '../../services/name-list.service';
declare var WOW: any;
declare var $: any;

var moment = require('moment');

import { Router } from '@angular/router';

@Component({
  selector: 'app-images-panel',
  templateUrl: './images-panel.component.html',
  styleUrls: ['./images-panel.component.css']
})
export class ImagesPanelComponent implements OnInit, AfterViewInit
{
  public topicId;

  @Input()
  public category: string = "";

  @Input()
  public set topicsExtern(externalList: Topic[])
  {
    this.topiclist = externalList;
  }

  public search: string = "";

  public currentPage: number = 0;

  public topiclist: Topic[] = new Array();
  public featuredtopiclist: Topic[] = new Array();

  constructor(private domSanitizer: DomSanitizer, private router: Router, private nameListService: NameListService, private ngZone: NgZone) { }

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
  }

  public fetchTopicList(startOn: number)
  {
    this.nameListService.getAllTopics(startOn, this.category, this.search).subscribe(
      data =>
      {
        this.ngZone.run(() =>
        {
          data.forEach((d) =>
          {
              this.topiclist.push(d);
          });
        });
      },
      err => JSON.stringify(err));
  }

  public formatTime(date: any)
  {
    var todaysDate = moment(new Date());
    var oDate = moment(new Date(date)).fromNow();

    return oDate;
  }
  public goToAbout(id: number)
  {
    this.topicId = id;
  }
  public youtube(url: string, topic: Topic)
  {
    var str = url.split('v=')[1];

    topic.isOnswitch = true;

    if (topic.currentPos == null)
    {
      topic.currentPos = 0;
    }

    return 'https://img.youtube.com/vi/' + str + '/' + topic.currentPos + '.jpg';
  }

}
