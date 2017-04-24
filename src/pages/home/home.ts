import { HomeModal } from './../home-modal/home-modal';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  openModal() {
      let modal = this.modalCtrl.create(HomeModal);
      modal.present();
  }
  
}
