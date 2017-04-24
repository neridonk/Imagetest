import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { croppData, Images } from '../../models';
declare var $: any;

@Component({
  selector: 'imgPanel',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit
{
  public base64;
  public cropper: croppData = new croppData();
  public image: Images;

  @Input()
  public set img(img: any)
  {
    this.image = img;
  }

  public get img()
  {
    return this.image;
  }

  @Output()
  public imgChange: EventEmitter<Images> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 215
      , max: true
    });
  }

  changeImage(ev: any)
  {
    let elemt: HTMLElement = this.elementRef.nativeElement;

    var img: HTMLImageElement = <HTMLImageElement>elemt.getElementsByClassName('responsive-img')[0];

    var files = ev.srcElement.files[0];
    var reader: FileReader = new FileReader();

    reader.onload = (e: any) =>
    {
      img.src = e.target.result;
      this.cropper.base64 = this.toBase64(img);
      this.cropper = Object.create(this.cropper);
    }
    reader.readAsDataURL(files);
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

  cropimg()
  {
    this.image.base64 = this.cropper.Cropper.getCroppedCanvas().toDataURL('image/jpeg');
    this.cropper.base64 = null;
    this.cropper.Cropper.destroy();
    this.cropper.Cropper = null;

    this.imgChange.emit(this.image);
  }

}
