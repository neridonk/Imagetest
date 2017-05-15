import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopicComponent } from '../topic.component';
import { Images, Topic, User, croppData } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent implements OnInit
{
  public category: string = 'landscape';


  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { 


  }


  ngOnInit()
  {

    this.nameListService.picURL = 'assets/img/landscape.png';

    this.nameListService.text = 'Loss is nothing else but change, and change is Natures delight.';

  }
}
