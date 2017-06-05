import { Component, OnInit, NgZone,AfterViewInit } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { User, Marker } from '../../models';
import { Observable } from 'rxjs/Observable';
declare var google: any;

@Component({
  selector: 'app-motivator-map',
  templateUrl: './motivator-map.component.html',
  styleUrls: ['./motivator-map.component.css']
})
export class MotivatorMapComponent implements AfterViewInit
{
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 2;

  public markers: Marker[] = new Array();
  public filteredmarkers: Marker[] = new Array();
  public search = '';

  constructor(
    private ngZone: NgZone,
    private nameListService: NameListService) { }

  ngAfterViewInit()
  {
    this.nameListService.getMotivators().subscribe(
      data =>
      {
        data.forEach((user) =>
        {

          let marker: Marker = new Marker();
          marker.Id = user.userid;
          marker.user = user;
          marker.postalcode = user.postalcode;
          marker.label = user.name;
          marker.iconUrl = this.resizeIcon(user.img);
          this.markers.push(marker);
          this.getLatLan(this.markers[this.markers.length - 1], user.postalcode + ' ' + user.country);
        });

        this.filter();

      },
      err => alert(JSON.stringify(err))
    );
  }

  resizeIcon(img: string)
  {
    var icon = {
      url: img, // url
      scaledSize: new google.maps.Size(55, 55), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      shape: { coords: [17, 17, 18], type: 'circle' },
      anchor: new google.maps.Point(0, 0) // anchor
      , labelClass: "labeasl", // the CSS class for the label

    };

    return icon;
  }

  getLatLan(marker: Marker, address: string)
  {

    this.nameListService.getLocationFromZip(address).subscribe(
      data =>
      {
        if (data == null || data.status == 'ZERO_RESULTS')
          return;

        this.ngZone.run(
          () =>
          {

            marker.lat = data.results[0].geometry.location.lat;
            marker.lng = data.results[0].geometry.location.lng;
          }
        );

      },
      err => console.log(JSON.stringify(err))
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

  markerClick(event: Marker)
  {
    this.filteredmarkers = [];

    const markerf = this.markers.filter(o => o.Id == event.Id)[0];
    this.filteredmarkers.push(markerf);
  }

  reset()
  {
    this.filteredmarkers = this.markers;
  }

  gotoPlace(postal)
  {
    this.nameListService.getLocationFromZip(postal).subscribe(
      data =>
      {
        if (data == null || data.status == 'ZERO_RESULTS')
        {
          alert('Place not found');
          return;
        }

        this.ngZone.run(
          () =>
          {
            this.lat = data.results[0].geometry.location.lat;
            this.lng = data.results[0].geometry.location.lng;
            this.zoom = 13;
            window.scrollTo(10, 0);

          }
        );

      },
      err => console.log(JSON.stringify(err))
    );
  }
}
