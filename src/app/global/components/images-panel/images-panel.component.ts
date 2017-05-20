import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
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

  constructor(private domSanitizer: DomSanitizer, private router: Router, private nameListService: NameListService) { }

  ngOnInit()
  {
    if (this.category == 'external')
      return;


    if (this.category == 'hall')
    {
      this.nameListService.getAllHallOfFame().subscribe(
        data =>
        {
          data.forEach((d) =>
          {
            this.featuredtopiclist.push(d);
          });

        },
        err => JSON.stringify(err));
      return;
    }

  }

  ngAfterViewInit()
  {
    if (this.category == 'hall')
    {
      return;
    }

    new WOW().init();

  }

  public fetchTopicList(startOn: number)
  {
    this.topiclist = [];

    this.nameListService.getAllTopics(startOn, this.category, this.search).subscribe(
      data =>
      {


        data.forEach((d) =>
        {
          if (d.isFeatured == 0)
            this.topiclist.push(d);
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
    this.router.navigate(['/about', id]);
  }
  public youtube(url: string, topic: Topic)
  {
    var str = url.split('v=')[1];


    if (!topic.isOnswitch)
    {
      setTimeout(() =>
      {
        topic.isOnswitch = false;
        topic.currentPos = Math.floor(Math.random() * 3) + 0;
      }, Math.floor(Math.random() * 3000) + 2000);
    }

    topic.isOnswitch = true;

    if (topic.currentPos == null)
    {
      topic.currentPos = 0;
    }

    return 'https://img.youtube.com/vi/' + str + '/' + topic.currentPos + '.jpg';
  }

}
