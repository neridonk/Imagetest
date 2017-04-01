import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
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
  private category: string = "";

  private search: string = "";

  private currentRow: number = 0;

  private topiclist: Topic[] = new Array();
  private featuredtopiclist: Topic[] = new Array();

  constructor(private router: Router, private nameListService: NameListService) { }

  ngOnInit()
  {
    this.fetchTopicList();

    this.nameListService.getAllFeaturedTopics(this.category).subscribe(
      data =>
      {
        data.forEach((d) =>
        {
          this.featuredtopiclist.push(d);
        });

      },
      err => JSON.stringify(err));
  }

  ngAfterViewInit()
  {

    new WOW().init();
    $('select').material_select();

    $(window).scroll(() =>
    {
      if ($('.CONTAINER') == null)
        return;

      if ($(window).scrollTop() + $(window).height() >=
        $('.CONTAINER').offset().top + $('.CONTAINER').height())
      {
        this.currentRow += 1;

        this.fetchTopicList();
      }

    });
  }

  private fetchTopicList()
  {
    this.nameListService.getAllTopics(this.currentRow, this.category, this.search).subscribe(
      data =>
      {
        data.forEach((d) =>
        {
          this.topiclist.push(d);
        });

        this.currentRow = this.topiclist.length;
      },
      err => JSON.stringify(err));
  }

  public formatTime(date: any)
  {
    var todaysDate = moment(new Date());
    var oDate = moment(date);
    var diffDays = oDate.diff(todaysDate, 'days');
    console.log(oDate + "----" + diffDays);
    return moment.duration(diffDays).humanize(true);

  }
  public goToAbout(id: number)
  {
    this.router.navigate(['/about', id]);
  }
}
