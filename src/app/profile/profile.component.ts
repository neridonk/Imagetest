import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Images, Topic, User } from '../models';
declare var WOW: any;
declare var $: any;
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit
{

  public respectcount = 0;
  public topicList: Topic[] = new Array();
  public user: User;
  public userimg: string = 'emptyPerson.png';;

  public isUser: boolean = false;

  public isChangeImage: boolean = false;
  public newImageUrl: string = '';;

  constructor(
    private nameListService: NameListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit()
  {

    let id = +this.route.snapshot.params['id'];

    if (NavbarComponent.userid != null)
    {
      this.nameListService.initUser(NavbarComponent.userid).then((user) =>
      {
        if (user.userid == id)
          this.isUser == true;
      });
    }
    this.nameListService.getUserbyId(id).subscribe(
      data =>
      {
        this.user = data[0];

        if (this.user.img == null || this.user.img == '')
          this.user.img = 'assets/img/noImage.jpeg';

        this.topicList = this.user.topic;

        this.topicList.forEach((topic) =>
        {
          this.respectcount = Number(this.respectcount) + Number(topic.upvote);
        });

      },
      err => alert(JSON.stringify(err))
    );



  }


  ngAfterViewInit()
  {

    new WOW().init();

  }

  public goToNewPicture()
  {
    this.router.navigate(['/addPicture']);
  }

  public goToAbout(id: number)
  {
    this.router.navigate(['/about', id]);

  }

  public changeImage()
  {
    this.nameListService.updateUserImg(this.newImageUrl).subscribe(
      data =>
      {
        this.user.img = this.newImageUrl;
        this.newImageUrl = '';
      },
      err => alert(JSON.stringify(err))
    );

  }


}




