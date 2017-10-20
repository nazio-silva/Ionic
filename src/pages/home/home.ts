import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HoteisProvider } from '../../providers/hoteis/hoteis';
//import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public searchQuery: string[];
  //public hot: string;

  public hoteis: any = [];
  public nota;
  public ex;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hoteisProvider: HoteisProvider,
  ) {
    this.listaHoteis();
  }

  ionViewDidLoad() {
    this.listaHoteis();
  }

  ionViewWillEnter() {
    this.nota = this.navParams.data.nota;
    this.ex = this.navParams.data.ex;
    //console.log("Nota digitada", this.hotel);
  }


  public listaHoteis() {
    return this.hoteisProvider.listaHoteis()
      .subscribe((hoteis) => {
        this.hoteis = hoteis.lista;
      },
      (erros) => {
      })
  }

  // OBSERVAÇÂO
  goToDetalhesPage(hoteis) {
    //console.log("Detalhe dos Hotéis", hoteis);
    this.navCtrl.push('DetalhesPage', hoteis);
  }

  //Avaliacao do objeto hotel(h)
  goToAvaliacaoPage(h) {
    this.navCtrl.push('AvaliacaoPage', h);
  }

  excluirHotel(h) {
    console.log("Excluido",h);
  }

  getHotel(ev: any) {

    let valor = ev.target.value;
    
    if (valor && valor.trim() != '') {
      //console.log(valor.trim());
      return this.hoteis = this.hoteis.filter((h) => {
        return (h.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1);
      })
    }
    this.listaHoteis();
  }
}

