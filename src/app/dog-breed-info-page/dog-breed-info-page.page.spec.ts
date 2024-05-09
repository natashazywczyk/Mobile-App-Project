import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogBreedInfoPagePage } from './dog-breed-info-page.page';

describe('DogBreedInfoPagePage', () => {
  let component: DogBreedInfoPagePage;
  let fixture: ComponentFixture<DogBreedInfoPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBreedInfoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
