import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogPetsPage } from './dog-pets.page';

describe('DogPetsPage', () => {
  let component: DogPetsPage;
  let fixture: ComponentFixture<DogPetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DogPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
