import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dog-pets',
  templateUrl: './dog-pets.page.html',
  styleUrls: ['./dog-pets.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DogPetsPage implements OnInit {

  numberOfPets:number = 0;
  numberOfPets2:number = 0;

  constructor() { }

  //Get the saved number of times the user has clicked the 'Pet' button
  ngOnInit() {
    const savedNumberOfPets = localStorage.getItem('numberOfPets');
    //If savedNumberOfPets exists
    if (savedNumberOfPets) {
      //Parses the number of clicks from string to integer
      this.numberOfPets = parseInt(savedNumberOfPets);
    }

    const savedNumberOfPets2 = localStorage.getItem('numberOfPets2');
    //If savedNumberOfPets2 exists
    if (savedNumberOfPets2) {
      //Parses the number of clicks from string to integer
      this.numberOfPets2 = parseInt(savedNumberOfPets2);
    }
  }

  //Increments the click count and saves it to the local storage of the app so it stays the same, even if the user goes back to home.page
  countPets() {
    this.numberOfPets++;
    localStorage.setItem('numberOfPets', this.numberOfPets.toString());
  }

  countPets2() {
    this.numberOfPets2++;
    localStorage.setItem('numberOfPets2', this.numberOfPets2.toString());
  }

}
