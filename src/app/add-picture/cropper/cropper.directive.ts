﻿import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
declare var Cropper: any;
import { croppData } from '../../models';

@Directive({
  selector: '[cropper]'
})
export class CropperDirective {

  public _cropper: croppData;

  @Input()
  public set cropper(cropper: croppData)
  {
    if (cropper == null)
      return;

    this._cropper = cropper;

    if (this._cropper.base64 != null)
    this.initCropper();
  }

  public get()
  {
    return 0;
  }

  @Output()
  cropperChange: EventEmitter<croppData> = new EventEmitter();

  constructor(private _element: ElementRef)
  {


  }

  public initCropper()
  {
    let $this = this;

    this._cropper = new Cropper(this._element.nativeElement, {
      cropBoxResizable: false,
      aspectRatio: 1 / 1
    });

    this.cropperChange.emit(this._cropper);
  }
}
