import { Component, OnInit,AfterViewInit } from '@angular/core';
import { NameListService,NavbarComponent } from '../shared/index';
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
  public selcategory : any ='';
  private topicList: Topic[] = new Array();

  private currentRow : number = 0;

public loggeduserid : any;
  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }


  ngOnInit()
  {
    this.loggeduserid  = NavbarComponent.userid;

    this.nameListService.getAllTopics(this.currentRow).subscribe(
      data => {
        this.topicList = data;
      },
      err => alert(JSON.stringify(err))
    );


  }


  ngAfterViewInit(){

          new WOW().init();
        $('select').material_select();

         $(window).scroll(function () {

           if ($(window).scrollTop() + $(window).height() >= 
            $('.CONTAINER').offset().top + $('.CONTAINER').height() ) { 
              alert('asd');
            } 

         });

  }

  public goToNewPicture()
  {
    this.router.navigate(['/addPicture']);
  }


public goToAbout( id : number){
    this.router.navigate(['/about', id]);

}


}




