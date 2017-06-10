import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { User, Marker } from '../../models';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-motivator-map',
  templateUrl: './motivator-map.component.html',
  styleUrls: ['./motivator-map.component.css']
})
export class MotivatorMapComponent implements AfterViewInit
{
  public markers: Marker[] = new Array();
  public filteredmarkers: Marker[] = new Array();
  public search = '';

  constructor(
    private ngZone: NgZone,
    private nameListService: NameListService,
   )
  {

  }

  ngAfterViewInit()
  {
    this.nameListService.getMotivators().subscribe(
      data =>
      {
        this.ngZone.run(() =>
        {
          data.forEach((user) =>
          {

            let marker: Marker = new Marker();
            marker.Id = user.userid;
            marker.user = user;
            marker.postalcode = user.postalcode;
            marker.label = user.name;
            this.markers.push(marker);
          });

          this.filter();
        });

      },
      err => alert(JSON.stringify(err))
    );

  }


  filter()
  {
    this.filteredmarkers = []

    if (this.search == '')
    {
      this.filteredmarkers = this.markers;
      return;
    }

    this.markers.forEach((marker) =>
    {
      if (marker.postalcode != null && marker.postalcode.toString().includes(this.search))
      {
        this.filteredmarkers.push(marker);
      }
      else
      {

        marker.user.tags.forEach((tag) =>
        {
          if (tag.Name.toLowerCase().includes(this.search))
          {
            this.filteredmarkers.push(marker);
          }
        });
      }

    });
  }

  reset()
  {
    this.filteredmarkers = this.markers;
  }

}
