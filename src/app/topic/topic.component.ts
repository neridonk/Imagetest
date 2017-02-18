import { Component, OnInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {



    constructor(private nameListService: NameListService) { }

  ngOnInit() {
  }

}
