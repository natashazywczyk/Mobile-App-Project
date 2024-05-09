import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-dog-facts',
  templateUrl: './dog-facts.page.html',
  styleUrls: ['./dog-facts.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DogFactsPage implements OnInit {

  url:string = "";

  constructor() { }

  ngOnInit() {
  }

  async openDogFacts()
  {
    await Browser.open({url: 'https://www.mspca.org/pet_resources/interesting-facts-about-dogs/'})
  }

}
