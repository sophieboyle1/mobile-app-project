import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { CocktailService } from '../Services/cocktail.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Declare class properties
  showThankYouMessage: boolean = false;
  email!: string;

  cocktail: any[] = []; // array to store cocktail data

  constructor(private service: CocktailService, private router: Router) { }

  // Method to execute when the page is loaded
  ionViewWillEnter() {
    this.service.GetCocktailData().subscribe(
      (data) => {
        this.cocktail = data.drinks;
      });
  }

  subscribe(subscriptionForm: NgForm) {
    // Show thank you message
    this.showThankYouMessage = true;
  }
  
}

