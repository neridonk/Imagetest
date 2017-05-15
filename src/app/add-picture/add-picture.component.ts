import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ParentClass } from 'components';
import { Images, Topic, User, croppData } from '../models';
declare var Cropper: any;
declare var $: any;
var moment = require('moment');
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-picture',
    templateUrl: './add-picture.component.html',
    styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent extends ParentClass implements OnInit {

    public user: User;

    public topic: Topic = new Topic();

    public images: Images[] = new Array();

    public currentImage: number = 0;

    public isYoutube = false;

    constructor(
      private router: Router,
      private nameListService: NameListService)
    {
        super();
    }


    ngOnInit() {

        this.nameListService.initUser(this.cst()).then((user) => {
            this.user = user;
            this.topic.userid = this.user.userid;

        });

    }



    save(): void {

        this.nameListService.addNewTopic(this.topic).subscribe(
            data => {
                this.addImage(data.code);
            },
            err => alert(JSON.stringify(err))
        );

    }

    addImage(topicId: any) {

        Promise.all(this.images.map((image) => {
            return new Promise((resolve) => {

              this.nameListService.addNewPictureToTopic(topicId, image).toPromise().then(() =>
              {
           
                    resolve.apply('');
                });

            });

        })).then((d) =>
        {
          this.router.navigate(['/t/profile', this.topic.userid]);
        });


    }

    public removeImage()
    {
      this.currentImage = Number(this.currentImage - 1);

      this.images.splice(this.currentImage, 1);


      this.images = this.images.slice(0);
    }


    public addNewImage() {
        if (this.images.length == this.currentImage) {

            let img = new Images();
            img.base64 = 'assets/img/noImage.jpeg';
            img.picdate = new Date();

            this.images.push(img);

        }

        this.currentImage = Number(this.currentImage + 1);

        this.images = this.images.slice(0);

    }

    public setImage(index: number) {
        this.currentImage = index + 1;
    }

    public cancel() {
        location.href = "/";
    }
}
