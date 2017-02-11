import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Images, Topic, User, croppData } from '../models';
declare var WOW: any;
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-panel',
  templateUrl: './images-panel.component.html',
  styleUrls: ['./images-panel.component.css']
})
export class ImagesPanelComponent implements OnInit, AfterViewInit
{

  @Input()
  private topiclist: Topic[] = new Array();

  constructor(private router: Router) { }

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {

    new WOW().init();
    $('select').material_select();

    $(window).scroll(function ()
    {

      if ($(window).scrollTop() + $(window).height() >=
        $('.CONTAINER').offset().top + $('.CONTAINER').height())
      {
        alert('asd');
      }

    });

  }

  public goToAbout(id: number)
  {
    this.router.navigate(['/about', id]);
  }

}
