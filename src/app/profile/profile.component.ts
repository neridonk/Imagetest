import { Component, OnInit,AfterViewInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Images, Topic, User } from '../models';
declare var WOW : any;
declare var $ : any;
import { Router,ActivatedRoute,Params  } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit
{


  public topicList : Topic[]= new Array();
  private user: User ;

  constructor(
    private nameListService: NameListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit()
  {

    
  let id = +this.route.snapshot.params['id'];

  this.nameListService.getUserbyId(id).subscribe(
      data => {
      this.user = data[0];
      this.topicList = this.user.topic;
      },
      err => alert(JSON.stringify(err))
    );



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




