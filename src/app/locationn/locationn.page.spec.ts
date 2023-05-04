import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationnPage } from './locationn.page';

describe('LocationnPage', () => {
  let component: LocationnPage;
  let fixture: ComponentFixture<LocationnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
