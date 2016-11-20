import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { croppData } from '../models/cropperModel';
import { Images, Topic, User } from '../models/AllModels';
declare var Jcrop: any;
declare var $: any;
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {


    cropperBefore: croppData = new croppData();
    cropperAfter: croppData = new croppData();

    private user: User = new User(1, "dom", "asds");

    private topic: Topic = new Topic();

    private imageBefore: Images = new Images();
    private imageafter: Images = new Images();


    //Register
    private newuser: User = new User();

    constructor(private nameListService: NameListService) { }


    ngOnInit() {

        this.cropperBefore.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";
        this.cropperAfter.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";

        this.topic.userid = this.user.userid;
    }



    changeImage(ev: any, isBefore: boolean) {

        var img: HTMLImageElement = <HTMLImageElement>document.getElementById(isBefore ? "image_1" : "image_2");
        var cropper: croppData = isBefore ? this.cropperBefore : this.cropperAfter;
        

        var files = ev.srcElement.files[0];
        var reader: FileReader = new FileReader();

        reader.onload = (e: any) => {
            img.src = e.target.result;
            cropper.base64 = this.toBase64(img);
        }
        reader.readAsDataURL(files);
    }


    toBase64(img: HTMLImageElement): string {

        var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');

        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0, img.height, img.height);
        return canvas.toDataURL();

    }

    save(): void {

        this.imageBefore.picdate = new Date();
        this.imageBefore.url = this.cropperBefore.base64;

        this.imageafter.picdate = new Date();
        this.imageafter.url = this.cropperBefore.base64;

        this.nameListService.addNewPictures(this.topic, this.imageBefore, this.imageafter).subscribe(
            data => {
                console.log(data + JSON.stringify(data))

            },
            err => alert(JSON.stringify(err))
        );

    }


    register() {

        this.nameListService.register(this.newuser).subscribe(
            data => {
                console.log(data + JSON.stringify(data))

            },
            err => alert(JSON.stringify(err))

        );
    }


    login() {

        this.nameListService.login(this.newuser).subscribe(
            data => {
                console.log(data + JSON.stringify(data))

            },
            err => alert(JSON.stringify(err))

        );
    }



}




