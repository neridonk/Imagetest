import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent
{
  public _currentPage = 0;
  public myId = 'page';

  @Input()
  public isempty: boolean = false;

  @Input()
  public maxRows = 30;

  @Output()
  public currentPageChange: EventEmitter<any> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) { }

  public next()
  {
    this._currentPage = Number(this._currentPage + 1);
    this.fireChange();
  }

  public prev()
  {
    if (this._currentPage == 0)
      return;

    this._currentPage = Number(this._currentPage - 1);
    this.fireChange();
  }

  public jumpsite(page = this._currentPage)
  {
    this._currentPage = Number(page);
    this.fireChange();
  }

  private fireChange()
  {
    this.setUrlParam();

    const sdf = Number(Number(this._currentPage) * Number(this.maxRows));
    this.currentPageChange.emit(sdf);
  }

  ngAfterViewInit()
  {
    this.activatedRoute.queryParams.subscribe((params: Params) =>
    {
      const currentPageOfTable = params[this.myId];

      if (currentPageOfTable != null)
      {
        this.jumpsite(currentPageOfTable);
      }

    });

    if (!window.location.href.includes(this.myId))
    {
      this.fireChange();
    }
  }

  private setUrlParam()
  {
    let param = this.myId + '=' + this._currentPage;

    if (this.activatedRoute.children.length != 0)
    {
      param = '&' + param;
    } else
    {
      if (!window.location.href.includes('?'))
      {
        param = '?' + param;
      }
    }

    let locationHref = window.location.href;

    if (window.location.href.includes(this.myId))
    {
      locationHref = window.location.href.split(this.myId)[0];
    }

    history.pushState({ path: locationHref + param }, this.myId + '-' + this._currentPage, locationHref + param);
  }


}
