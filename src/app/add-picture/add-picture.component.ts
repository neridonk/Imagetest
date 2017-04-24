import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ParentClass } from 'components';
import { Images, Topic, User, croppData } from '../models';
declare var Cropper: any;
declare var $: any;
var moment = require('moment');


@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent extends ParentClass implements OnInit
{

  public user: User;

  public topic: Topic = new Topic();

  public images: Images[] = new Array();

  public currentImage: number = 0;

  constructor(private nameListService: NameListService)
  {
    super();
    this.addNewImage();
  }


  ngOnInit()
  {

    this.nameListService.initUser(this.cst()).then((user) =>
    {
      this.user = user;
      this.topic.userid = this.user.userid;

    });

  }



  save(): void
  {

    this.nameListService.addNewPictures(this.topic, this.images[0], this.images[1]).subscribe(
      data =>
      {
        location.href = "/profile/" + this.topic.userid;

      },
      err => alert(JSON.stringify(err))
    );

  }

  public addNewImage()
  {
    if (this.images.length == this.currentImage) {

      let img = new Images();
      img.base64 = 'assets/img/noImage.jpeg';
      img.picdate = new Date();

      this.images.push(img);
      
    }

    this.currentImage++;

    this.images = this.images.slice(0);

  }


  public cancel()
  {
    location.href = "/";
  }
}
