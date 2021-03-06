﻿import { Component, AfterViewInit } from '@angular/core';
import { Images, Topic, User, Comment, croppData } from '../models';
import { NameListService } from '../global/services/name-list.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ParentClass } from 'components';
import { ActivatedRoute, Params, Router } from '@angular/router';

declare var Cropper: any;
var moment = require('moment');
declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends ParentClass implements AfterViewInit
{

  public topic: Topic;
  public isNotMe: boolean = true;

  public addnewPic: boolean = true;
  public hideComments: boolean = true;
  public newComment: Comment = new Comment();
  public commentList: Comment[] = new Array();
  public id: number;
  public respectProvided: boolean = false;

  public cropperAfter: croppData = new croppData();
  public imageAfter: Images = new Images();

  public followerCount;

  public isFollowing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nameListService: NameListService)
  {
    super();
    this.cropperAfter.base64 = "assets/img/noImage.jpeg";

    this.id = +this.route.snapshot.params['id'];

    this.nameListService.getTopicbyId(this.id).subscribe(
      data =>
      {
        this.topic = data[0];



        this.newComment.topicid = this.topic.topicid;

        this.initComments();
        this.fetchMe();
      },
      err => alert(JSON.stringify(err))
    );

    this.nameListService.initUser(this.cst()).then((user) =>
    {
      this.initFollowers();
    });
  }

  public fetchMe()
  {
    this.nameListService.initUser(this.cst()).then(
      (data) =>
      {
        if (this.topic.userid == data.userid)
          this.isNotMe = false;

        this.newComment.userid = data.userid;
      });
  }


  ngAfterViewInit()
  {
    new WOW().init();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

  private initFollowers()
  {
    //getNewComments
    this.nameListService.getFollower(this.id).subscribe(
      data =>
      {
        this.followerCount = 0;

        if (data == null)
          return;
        let list: Array<any> = new Array();

        this.followerCount = data.length;

        if (this.followerCount == null)
        {
          this.followerCount = 1;
          list.push(data);
        } else
        {

          data.foreach(
            (follo) =>
            {
              list.push(follo);
            }
          );
        }

        if (list.find(o => o.userid == NameListService.user.userid))
          this.isFollowing = true;
      },
      err => alert(JSON.stringify(err))
    );
  }

  private initComments()
  {
    //getNewComments
    this.nameListService.getCommentsbyId(this.id).subscribe(
      data =>
      {
        this.commentList = data.slice().reverse();
      },
      err => alert(JSON.stringify(err))
    );
  }

  public delete(id: any)
  {

    if (this.topic.images.length == 2)
    {
      window.alert("Must have 2 Images");
      return;
    }

    this.nameListService.removePicture(id).subscribe(
      data =>
      {

        location.reload();

      },
      err => alert(JSON.stringify(err))
    );
  }

  //IF LOGGED STUFF

  public savePic()
  {

    this.imageAfter.url = this.cropperAfter.base64;
    this.imageAfter.picdate = new Date((<HTMLInputElement>document.getElementById('picdateid')).value);

    this.nameListService.addNewPictureToTopic(this.topic.topicid, this.imageAfter).subscribe(
      data =>
      {
        location.reload();
      },
      err => alert(JSON.stringify(err))
    );
  }

  changeImage(ev: any, isBefore: boolean)
  {

    var img: HTMLImageElement = <HTMLImageElement>document.getElementById(isBefore ? "image_1" : "image_2");
    var cropper: croppData = isBefore ? this.cropperAfter : this.cropperAfter;


    var files = ev.srcElement.files[0];
    var reader: FileReader = new FileReader();

    reader.onload = (e: any) =>
    {
      img.src = e.target.result;
      cropper.base64 = this.toBase64(img);
      this.initCropper(cropper, img);
    }
    reader.readAsDataURL(files);
  }

  initCropper(crops: croppData, image: any)
  {
    crops.Cropper = new Cropper(image, {
      cropBoxResizable: false,
      aspectRatio: 1 / 1
    });
  }
  cropimg2()
  {
    var base64 = this.cropperAfter.Cropper.getCroppedCanvas().toDataURL('image/jpeg');
    this.cropperAfter.base64 = base64;
    this.cropperAfter.Cropper.destroy();
    this.cropperAfter.Cropper = null;
  }

  toBase64(img: HTMLImageElement): string
  {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');

    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, img.height, img.height, 0, 0, 330, 240);
    return canvas.toDataURL();

  }

  public deletePost()
  {
    this.nameListService.removeTopic(this.topic.topicid).subscribe(
      data =>
      {
        this.router.navigate(['/']);
      },
      err => alert(JSON.stringify(err))
    );
  }

  public getDiffTime(date: any): number
  {
    if (date == null)
    {
      return 10;
    }

    var diff: any = new Date().getTime() - new Date(date).getTime();
    var mindiff = Math.round(diff / 60000);
    return mindiff;
  }

  public post()
  {

    if (this.getDiffTime(localStorage.getItem("lsCmt")) < 1)
    {
      alert('Dont spam pls');
      return;
    }

    this.nameListService.addNewComment(this.newComment).subscribe(
      data =>
      {
        this.newComment.texts = '';
        this.initComments();
        localStorage.setItem("lsCmt", new Date().toUTCString());
      },
      err => alert(JSON.stringify(err))
    );
  }

  public updVote()
  {
    if (localStorage.getItem("ldId") == this.topic.topicid.toString())
    {
      return;
    }

    this.respectProvided = true;

    setTimeout(() =>
    {
      this.respectProvided = false;
    }, 3000);

    this.nameListService.updateTopic(this.topic.topicid).subscribe(
      data =>
      {
        let vr: number = Number(this.topic.upvote) + 1;
        this.topic.upvote = vr;
        localStorage.setItem("ldId", this.topic.topicid.toString());
      },
      err => alert(JSON.stringify(err))
    );
  }

  public formatTime(date: Date)
  {
    return moment.duration(date).humanize();
  }

  public joinFollower()
  {
    this.nameListService.addFollower(this.topic.topicid).subscribe(
      data =>
      {
        this.followerCount = Number(this.followerCount) + 1;
        this.isFollowing = true;
      },
      err => alert(JSON.stringify(err))
    );
  }

  public removeFollow()
  {
    this.nameListService.removeFollower(this.topic.topicid).subscribe(
      data =>
      {
        this.followerCount = Number(this.followerCount) - 1;
        this.isFollowing = false;
      },
      err => alert(JSON.stringify(err))
    );
  }

  public changeText(image: Images)
  {
    this.nameListService.updateImageText(image.description, image.imgid).subscribe(
      data =>
      {
        window.location.reload();
      },
      err => err
    );
  }

}
