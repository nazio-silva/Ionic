import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HoteisProvider } from '../../providers/hoteis/hoteis';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public hoteis: any = [];
  public nota;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public hoteisProvider: HoteisProvider
  ) {

  }

  ionViewDidLoad() {
    this.listaHoteis();
  }

  ionViewWillEnter() {
    this.nota = this.navParams.data.nota;
    //console.log("Nota digitada", this.hotel);
  }


  public listaHoteis() {
    this.hoteisProvider.listaHoteis()
      .subscribe((hoteis) => {
        this.hoteis = hoteis.lista;
        //console.log("Hoteis:", this.hoteis);
      },
      (erros) => {
        //console.log("Error", erros);
      }
      )
  }

  // OBSERVAÇÂO
  goToDetalhesPage(hoteis) {
    //console.log("Detalhe dos Hotéis", hoteis);
    this.navCtrl.push('DetalhesPage', hoteis);
  }

  goToAvaliacaoPage(h) {
    this.navCtrl.push('AvaliacaoPage', h);
  }
}
