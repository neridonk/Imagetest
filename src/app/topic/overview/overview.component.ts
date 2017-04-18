import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Images, Topic, User, croppData } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{

  public category: string = '';


  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }


  ngOnInit() {

  }
}




