import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[accFoucs]'
})
export class FocusDirective
{

  public isFocus: boolean = false;

  @Input()
  public set focus(isfocused: boolean)
  {
    this.isFocus = isfocused;
    if (isfocused)
    {
      setTimeout(() => // https://github.com/angular/angular/issues/6005
      {
        this.element.nativeElement.focus();
      }, 1);
    }
  }

  public get focus()
  {
    return this.isFocus;
  }

  constructor(private element: ElementRef) { }
}
