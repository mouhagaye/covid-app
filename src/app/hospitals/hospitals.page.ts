import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit, AfterViewInit {
  [x: string]: any;

  @ViewChild('mapElement') mapElement: ElementRef;
  places: Array<any>;

  constructor(private geolocation: Geolocation, private ngZone: NgZone) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.geolocation.getCurrentPosition().then((resp) => {
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      // tslint:disable-next-line: prefer-const
      let service = new google.maps.places.PlacesService(mapOptions);

      // tslint:disable-next-line: prefer-const
      let request = {
        location: latLng,
        radius: 500,
        types: ['hospital', 'health']};

      service.nearbySearch(request, (results, status) => {
          this.callback(results, status);
          this.places = results;

      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  createMarker(place){
    // tslint:disable-next-line: prefer-const
    let placeLoc = place.geometry.location;
    // tslint:disable-next-line: prefer-const
    let marker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    // tslint:disable-next-line: prefer-const
    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.infowindow);
      });
    });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    } else { alert('no results'); }
  }

  addMarker(){

    // tslint:disable-next-line: prefer-const
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // tslint:disable-next-line: prefer-const
    let content = '<h4>You are here!</h4>';

    this.addInfoWindow(marker, content);

  }


  addInfoWindow(marker, content){

    // tslint:disable-next-line: prefer-const
    let infoWindow = new google.maps.InfoWindow({
      // tslint:disable-next-line: object-literal-shorthand
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.ngZone.run(() => {
        infoWindow.open(this.map, marker);
      });
    });
  }
}
