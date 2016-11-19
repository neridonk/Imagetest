import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { croppData } from '../models/cropperModel';
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


    constructor() { }


    ngOnInit() {

        this.cropperBefore.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";
        this.cropperAfter.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";
    }



    changeImage(ev: any, isBefore: boolean) {

        var img: HTMLImageElement = <HTMLImageElement>document.getElementById(isBefore ? "image_1" : "image_2");
        var cropper: croppData = isBefore ? this.cropperBefore : this.cropperAfter;
        

        var files = ev.srcElement.files[0];
        var reader: FileReader = new FileReader();

        reader.onload = (e: any) => {
            img.src = e.target.result;
            //cropper.base64 = this.toBase64(img);
        }
        reader.readAsDataURL(files);
    }


    toBase64(img: HTMLImageElement): string {

        var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');

        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL();

    }


}




