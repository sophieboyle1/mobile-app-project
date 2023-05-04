import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { CocktailService } from '../Services/cocktail.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  long: number = 0;
  lat: number = 0;
  time: number = 0;
  showThankYouMessage: boolean = false;
  email!: string;


  cocktail: any[] = [];

  constructor(private service: CocktailService) { }

  ionViewWillEnter() {
    this.service.GetCocktailData().subscribe(
      (data) => {
        this.cocktail = data.drinks;
      });
  }


  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.long = coordinates.coords.longitude;
    this.lat = coordinates.coords.latitude;
    this.time = coordinates.timestamp;
    console.log('Current position:', coordinates);

  }
  subscribe(subscriptionForm: NgForm) {
    // Show thank you message
    this.showThankYouMessage = true;
  }
  
}

