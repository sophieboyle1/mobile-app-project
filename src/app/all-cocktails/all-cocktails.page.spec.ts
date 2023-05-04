import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllCocktailsPage } from './all-cocktails.page';

describe('AllCocktailsPage', () => {
  let component: AllCocktailsPage;
  let fixture: ComponentFixture<AllCocktailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllCocktailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
