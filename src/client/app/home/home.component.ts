import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { croppData } from '../models/cropperModel';
import { Images, Topic, User } from '../models/AllModels';
declare var Cropper: any;
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

export class HomeComponent implements OnInit, AfterViewInit {


  cropperBefore: croppData = new croppData();
  cropperAfter: croppData = new croppData();

  private user: User = new User(1, "dom", "asds");

  private topic: Topic = new Topic();

  private imageBefore: Images = new Images();
  private imageafter: Images = new Images();

  constructor(private nameListService: NameListService) { }


  ngOnInit() {

    this.cropperBefore.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";
    this.cropperAfter.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";



  this.nameListService.getUserbyId(localStorage.getItem('userid')).subscribe(
      data => {
      this.user = data[0];
      this.topic.userid = this.user.userid;
      },
      err => alert(JSON.stringify(err))
    );
  }


  ngAfterViewInit(){
  
         $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
          $('select').material_select();

  }

  changeImage(ev: any, isBefore: boolean) {

    var img: HTMLImageElement = <HTMLImageElement>document.getElementById(isBefore ? "image_1" : "image_2");
    var cropper: croppData = isBefore ? this.cropperBefore : this.cropperAfter;


    var files = ev.srcElement.files[0];
    var reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      img.src = e.target.result;
      cropper.base64 = this.toBase64(img);
      this.initCropper(cropper, img);
    }
    reader.readAsDataURL(files);
  }

  cropimg1() {
    var base64 = this.cropperBefore.Cropper.getCroppedCanvas().toDataURL('image/jpeg');
    this.cropperBefore.base64 = base64;
    this.cropperBefore.Cropper.destroy();
    this.cropperBefore.Cropper = null;
  }

  cropimg2() {
    var base64 = this.cropperAfter.Cropper.getCroppedCanvas().toDataURL('image/jpeg');
    this.cropperAfter.base64 = base64;
    this.cropperAfter.Cropper.destroy();
    this.cropperAfter.Cropper = null;
  }


  initCropper(crops: croppData, image: any) {
    crops.Cropper = new Cropper(image, {
      cropBoxResizable: false,
      aspectRatio: 1 / 1
        });
  }



  toBase64(img: HTMLImageElement): string {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');

    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, img.height, img.height,0,0,330,240);
    return canvas.toDataURL();

  }

  save(): void {

    this.imageBefore.picdate = new Date((<HTMLInputElement>document.getElementById('picdateid1')).value);
    this.imageBefore.url = this.cropperBefore.base64;

    this.imageafter.picdate = new Date((<HTMLInputElement>document.getElementById('picdateid2')).value);
    this.imageafter.url = this.cropperAfter.base64;

    this.nameListService.addNewPictures(this.topic, this.imageBefore, this.imageafter).subscribe(
      data => {
        location.href ="/profile/"+this.topic.userid;

      },
      err => alert(JSON.stringify(err))
    );

  }

  public cancel(){
    location.href ="/overview";
  }

}




