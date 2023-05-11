import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../Services/cocktail.service';

@Component({
  selector: 'app-all-cocktails',
  templateUrl: './all-cocktails.page.html',
  styleUrls: ['./all-cocktails.page.scss'],
})
export class AllCocktailsPage {
  cocktail: any = [];
  constructor(private service: CocktailService) { }

  ionViewWillEnter() {
    this.service.GetCocktailData().subscribe(
      (data) => {
        this.cocktail = data.drinks;
      });
  }

}
