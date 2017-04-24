import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home-modal',
  templateUrl: 'home-modal.html',
})
export class HomeModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeModal');
  }

  close(){
    this.view.dismiss();
  }  

}
