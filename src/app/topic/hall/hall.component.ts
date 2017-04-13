import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopicComponent } from '../topic.component';
import { Images, Topic, User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  constructor(
    private nameListService: NameListService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
