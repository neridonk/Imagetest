import { Component, OnInit, NgZone } from '@angular/core';
import { NameListService } from '../../global/services/name-list.service';
import { User, Marker } from '../../models';
import { Observable } from 'rxjs/Observable';
declare var google: any;

@Component({
  selector: 'app-motivator-map',
  templateUrl: './motivator-map.component.html',
  styleUrls: ['./motivator-map.component.css']
})
export class MotivatorMapComponent implements OnInit
{
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 2;

  public markers: Marker[] = new Array();


  constructor(
    private ngZone: NgZone,
    private nameListService: NameListService) { }

  ngOnInit()
  {
    this.nameListService.getMotivators().subscribe(
      data =>
      {
        data.forEach((user) =>
        {

          let marker: Marker = new Marker();
          marker.Id = user.userid;
          marker.user = user;
          marker.label = user.name;
          marker.iconUrl = this.resizeIcon(user.img);
          this.markers.push(marker);
          this.getLatLan(this.markers[this.markers.length - 1], user.postalcode + ' ' + user.country);
        });

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
        console.log(data);

        if (data == null || data.status == 'ZERO_RESULTS')
          return;

        this.ngZone.run(
          () =>
          {
            console.log(marker);

            marker.lat = data.results[0].geometry.location.lat;
            marker.lng = data.results[0].geometry.location.lng;
          }
        );

      },
      err => console.log(JSON.stringify(err))
    );
  }

  gotoPlace(postal)
  {
    this.nameListService.getLocationFromZip(postal).subscribe(
      data =>
      {
        console.log(data);

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
          }
        );

      },
      err => console.log(JSON.stringify(err))
    );
  }
}
