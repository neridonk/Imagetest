﻿import { ElementRef, Directive, AfterViewInit, Output, Input, EventEmitter } from '@angular/core';

declare var $: any;

@Directive({
  selector: 'input[pickadate]'
})
export class PickadateDirective implements AfterViewInit
{

  @Input() value = new Date();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() format = 'dd-mm-yyyy';

  @Input() disabledTo: Date = new Date('1892/2/14');

  @Input() disabledFrom: Date = new Date('1892/2/14');

  constructor(public _element: ElementRef)
  { }

  ngAfterViewInit()
  {
    if (this.disabledTo == null)
      this.disabledTo = new Date('1892/2/14');

    if (this.disabledFrom == null)
      this.disabledFrom = new Date('1892/2/14');

    let $this = this;

    let opts = {
      selectMonths: true, 
      selectYears: 115 ,
      format: this.format

    };
    let $input = $(this._element.nativeElement).pickadate(opts);
    var picker = $input.pickadate('picker')
      .set('select', this.value)
      .on('close', (d) => { this.onPickerClose(picker.get('select', 'yyyy/mm/dd')); })
      .on('open', (d) => this.reInitOption(picker, $this));

    $('.picker').appendTo('body');

  }

  private reInitOption(picker: any, $this: any)
  {

  }


  private onPickerClose(str: string)
  {
    this.valueChange.emit(new Date(str));
  }
}
