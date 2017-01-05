import { Component } from '@angular/core';
import { Images, Topic, User } from '../models/AllModels';
import { NameListService } from '../shared/index';
import { ActivatedRoute,Params } from '@angular/router';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

private  topic : Topic;

  constructor(
    private route:ActivatedRoute,
    private nameListService: NameListService) {

  let id = +this.route.snapshot.params['id'];


     this.nameListService.getTopicbyId(id).subscribe(
      data => {
      this.topic = data[0];
        console.log(this.topic);
      },
      err => alert(JSON.stringify(err))
    );

   }


  
}
