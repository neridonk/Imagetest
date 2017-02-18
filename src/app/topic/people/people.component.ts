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

    private topiclist: Topic[] = new Array();
    private currentRow: number = 0;

    constructor(
        private nameListService: NameListService,
        private router: Router
    ) { }


    ngOnInit() {
        this.nameListService.picURL = 'assets/img/sport.png';
        this.nameListService.text = 'Only I can change my life. No one can do it for me.';
        this.nameListService.getAllTopics(this.currentRow).subscribe(
            data => {
                this.topiclist = data;
            },
            err => alert(JSON.stringify(err)));
    }
}
