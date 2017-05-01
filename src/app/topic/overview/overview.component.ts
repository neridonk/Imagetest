import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Images, Topic, User, croppData } from '../../models';
import { Router } from '@angular/router';
import { ParentClass } from 'components';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent extends ParentClass  implements OnInit{

  public category: string = '';
  public showRegister: boolean = false;


  constructor(
    private nameListService: NameListService,
    private router: Router
  ) {
    super();
  }


  ngOnInit() {
    if (this.cst() == null)
    {
      setTimeout(() =>
      {
        this.showRegister = true;
      }, 10000);
    }
  }
}




