import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  long: number = 0;
  lat: number = 0;
  time: number = 0;

  constructor() { }

  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.long = coordinates.coords.longitude;
    this.lat = coordinates.coords.latitude;
    this.time = coordinates.timestamp;
    console.log('Current position:', coordinates);

  }

  ngOnInit() {
  }

}
