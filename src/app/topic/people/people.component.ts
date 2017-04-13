import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopicComponent } from '../topic.component';
import { Images, Topic, User, croppData } from '../../models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public category: string = 'people';

    constructor(
        private nameListService: NameListService,
        private router: Router
    ) { }


    ngOnInit() {
        this.nameListService.picURL = 'assets/img/sport.png';
       
    }
}
