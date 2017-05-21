import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent
{
  @ViewChild('thePagepanel')
  pagepanel: ElementRef;

  public _currentPage = 0;
  public myId = 'page';

  public onLoad: boolean = false;


  @Input()
  public isempty: boolean = false;

  @Input()
  public maxRows = 30;

  @Output()
  public currentPageChange: EventEmitter<any> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute)
  {

    $(window).bind('scroll', () =>
    {
      if (this.isElementInViewport())
      {
        if (!this.onLoad)
          this.next();
      }
    });
  }

  public next()
  {
    this._currentPage = Number(this._currentPage + 1);
    this.fireChange();
    this.onLoad = true;
    setTimeout(() =>
    {
      this.onLoad = false;
    }, 2000);
  }

  private fireChange()
  {
    const sdf = Number(Number(this._currentPage) * Number(this.maxRows));
    this.currentPageChange.emit(sdf);
  }

  ngAfterViewInit()
  {
    this.fireChange();
  }

  isElementInViewport()
  {
    var el = this.pagepanel.nativeElement;
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

}
