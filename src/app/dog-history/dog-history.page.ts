import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-dog-history',
  templateUrl: './dog-history.page.html',
  styleUrls: ['./dog-history.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DogHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async openDogHistory()
  {
    await Browser.open({url: 'https://www.britannica.com/animal/dog#ref15455'})
  }

}
