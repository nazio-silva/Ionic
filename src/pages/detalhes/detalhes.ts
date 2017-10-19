import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  public detalhes: any;  // Aqui

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetalhesPage');
  }

  ionViewWillEnter() {  // Aqui
    //console.log("Descrição:", this.navParams.data);
    this.detalhes = this.navParams.data;
  }

}
