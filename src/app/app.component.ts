import { Component, AfterViewInit  } from '@angular/core';
import { ParentComponent } from './global/components/parentComponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ParentComponent implements AfterViewInit
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
      ParentComponent.loadingHide();
    }, 100);
  }


}
