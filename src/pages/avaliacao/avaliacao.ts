import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {

   public hotel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,) {
      this.hotel = this.navParams.data;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AvaliacaoPage');
    //this.salvarAvaliacao();
  }

  ionViewWillEnter() { 
    
  }

  salvarAvaliacao() {
    //console.log(this.hotel);
    this.navCtrl.push(HomePage, {"hotel": this.hotel});
  }
}