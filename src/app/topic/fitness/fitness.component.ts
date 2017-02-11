import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Images, Topic, User, croppData } from '../../models';
declare var WOW: any;
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit
{

  private topiclist: Topic[] = new Array();

  private currentRow: number = 0;

  public loggeduserid: any;
  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }


  ngOnInit()
  {
    this.nameListService.getAllTopics(this.currentRow).subscribe(
      data =>
      {
        this.topiclist = data;
      },
      err => alert(JSON.stringify(err)));

  }
}
