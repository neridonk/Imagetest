import { Component } from '@angular/core';
import { ParentClass } from './global/components/ParentClass';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './global/services/name-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ParentClass
{

  constructor(private nameListService: NameListService
  )
  {
    super();
    if (NavbarComponent.userid != null)
    {
      this.nameListService.initUser(NavbarComponent.userid).then((user) =>
      {
        if (user.img == '')
        {
          this.nameListService.picURL = 'assets/img/noImage.jpeg';
        } else
        {
          this.nameListService.picURL = user.img;
        }
      });
    }
  }


}
