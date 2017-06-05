import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { croppData, Images } from '../../models';
declare var $: any;

@Component({
  selector: '[imgPanel]',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit
{
  public base64;
  public cropper: croppData = new croppData();
  public image: Images;

  public picstep = 0;

  @ViewChild('imageelemento')
  public imageelemento: ElementRef;

  @ViewChild('fileUploadEle')
  public fileUploadEle: ElementRef;

  @Input()
  public set img(img: any)
  {
    if (img.base64 == 'assets/img/noImage.jpeg')
    {
      this.picstep = 0;
    }
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

  choseFileFire()
  {
    this.fileUploadEle.nativeElement.click();
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

    var img: HTMLImageElement = <HTMLImageElement>this.imageelemento.nativeElement;

    var files = ev.srcElement.files[0];
    var reader: FileReader = new FileReader();

    reader.onload = (e: any) =>
    {
      if (e.total > 4000000)
      {
        alert('to large');
        return;
      }
      img.src = e.target.result;
      this.cropper.base64 = this.toBase64(img);
      this.cropper = Object.create(this.cropper);
      this.picstep = 0;
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
    this.picstep = 1;
  }

}
