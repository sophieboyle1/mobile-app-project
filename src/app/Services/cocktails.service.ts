import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http:HttpClient) { }
  GetCocktailData():Observable<any>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  }
}
