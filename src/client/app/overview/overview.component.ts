import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { croppData } from '../models/cropperModel';
import { Images, Topic, User } from '../models/AllModels';

import {Router}                           from '@angular/router';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css'],
})

export class OverviewComponent implements OnInit {



  private topicList: Topic[] = new Array();

    constructor(
        private nameListService: NameListService,
        private router: Router
    ) { }


    ngOnInit() {


    }





}




