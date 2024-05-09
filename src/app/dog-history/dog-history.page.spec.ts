import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogHistoryPage } from './dog-history.page';

describe('DogHistoryPage', () => {
  let component: DogHistoryPage;
  let fixture: ComponentFixture<DogHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DogHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
