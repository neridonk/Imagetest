import { Component,AfterViewInit } from '@angular/core';
import { Images, Topic, User } from '../models/AllModels';
import { NameListService } from '../shared/index';
import { ActivatedRoute,Params } from '@angular/router';
import { croppData } from '../models/cropperModel';

declare var Cropper: any;
declare var $: any;
declare var WOW:any;
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements AfterViewInit {

private  topic : Topic;
private isNotMe : boolean = true;



  public addnewPic : boolean = true;
  private cropperAfter: croppData = new croppData();

  private imageAfter: Images = new Images();

  constructor(
    private route:ActivatedRoute,
    private nameListService: NameListService) {

  let id = +this.route.snapshot.params['id'];


     this.nameListService.getTopicbyId(id).subscribe(
      data => {
      this.topic = data[0];

      if(String(this.topic.userid) == localStorage.getItem('userid'))
          this.isNotMe = false;

console.log(String(this.topic.userid) == localStorage.getItem('userid'));

      },
      err => alert(JSON.stringify(err))
    );

        this.cropperAfter.base64 = "http://erpmiddleeast.com/wp-content/themes/ess-php/images/noimg.jpg";


   }

   ngAfterViewInit(){

      new WOW().init();
       $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
   }

   public delete(id:any)
   {

      if(this.topic.images.length == 2)
      {
        window.alert("Must have 2 Images");
        return;
      }

    this.nameListService.removePicture(id).subscribe(
      data => {        

        location.reload();
    
      },
      err => alert(JSON.stringify(err))
    );
   }

   //IF LOGGED STUFF

   public savePic(){

    this.imageAfter.url = this.cropperAfter.base64;
    this.imageAfter.picdate = new Date((<HTMLInputElement>document.getElementById('picdateid')).value);

    this.nameListService.addNewPictureToTopic(this.topic.topicid, this.imageAfter).subscribe(
      data => {        
    location.reload();
      },
      err => alert(JSON.stringify(err))
    );
   }

  changeImage(ev: any, isBefore: boolean) {

    var img: HTMLImageElement = <HTMLImageElement>document.getElementById(isBefore ? "image_1" : "image_2");
    var cropper: croppData = isBefore ? this.cropperAfter : this.cropperAfter;


    var files = ev.srcElement.files[0];
    var reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      img.src = e.target.result;
      cropper.base64 = this.toBase64(img);
      this.initCropper(cropper, img);
    }
    reader.readAsDataURL(files);
  }

   initCropper(crops: croppData, image: any) {
    crops.Cropper = new Cropper(image, {
      cropBoxResizable: false,
      aspectRatio: 1 / 1,
      crop: (e: any) => {
        console.log(e.detail.x);
        console.log(e.detail.y);
        console.log(e.detail.width);
        console.log(e.detail.height);
        console.log(e.detail.rotate);
        console.log(e.detail.scaleX);
        console.log(e.detail.scaleY);
      }
    });
  }
  cropimg2() {
    var base64 = this.cropperAfter.Cropper.getCroppedCanvas().toDataURL('image/jpeg');
    this.cropperAfter.base64 = base64;
    this.cropperAfter.Cropper.destroy();
    this.cropperAfter.Cropper = null;
  }

  toBase64(img: HTMLImageElement): string {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');

    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, img.height, img.height,0,0,330,240);
    return canvas.toDataURL();

  }

  public deletePost(){
      this.nameListService.removeTopic(this.topic.topicid).subscribe(
      data => {        
       location.href = "/overview";
   
      },
      err => alert(JSON.stringify(err))
    );
  }

}
