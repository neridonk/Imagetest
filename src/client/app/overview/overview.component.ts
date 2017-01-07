import { Component, OnInit,AfterViewInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { croppData } from '../models/cropperModel';
import { Images, Topic, User } from '../models/AllModels';
declare var WOW : any;
declare var $ : any;
import { Router } from '@angular/router';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
})

export class OverviewComponent implements OnInit, AfterViewInit
{


  public isFilterHidden : boolean= true;
  private topicList: Topic[] = new Array();

  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }


  ngOnInit()
  {

    this.nameListService.getAllTopics().subscribe(
      data => {
        this.topicList = data;
        console.log(this.topicList);
      },
      err => alert(JSON.stringify(err))
    );

        $('select').material_select();

  }


  ngAfterViewInit(){

          new WOW().init();

  }

  public goToNewPicture()
  {
    this.router.navigate(['/addPicture']);
  }

public goToAbout( id : number){
    this.router.navigate(['/about', id]);

}


}




