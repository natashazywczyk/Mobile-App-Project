import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLinkWithHref],
})
export class HomePage {
  constructor(private router:Router) {}

  ButtonClick()
  {
    this.router.navigate(['/dog-breed-info-page'])
  }

  ButtonClick2()
  {
    this.router.navigate(['dog-history'])
  }

  ButtonClick3()
  {
    this.router.navigate(['dog-facts'])
  }

  ButtonClick4()
  {
    this.router.navigate(['dog-pets'])
  }

  ngOnInit()
  {

  }

  
}
