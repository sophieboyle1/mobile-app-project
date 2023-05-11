import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailsDataService {
  cocktail: any[] = [];

  constructor() { }
}

