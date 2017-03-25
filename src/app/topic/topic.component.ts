import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NameListService } from '../global/services/name-list.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements AfterViewInit {



    constructor(private nameListService: NameListService) { }

    ngAfterViewInit()
    {
      setTimeout(() =>
      {

      }, 2000);
  }

}
