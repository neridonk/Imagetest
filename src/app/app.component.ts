import { Component, AfterViewInit  } from '@angular/core';
import { ParentClass } from './global/components/ParentClass';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ParentClass implements AfterViewInit
{

  constructor(
   )
  {
    super();

  }

  ngAfterViewInit()
  {
    setTimeout(() =>
    {
        ParentClass.loadingHide();
    }, 100);
  }


}
