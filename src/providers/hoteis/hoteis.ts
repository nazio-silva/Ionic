import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HoteisProvider {

  private urlBase = "http://localhost:8000/hospedagem/";
  
  constructor(
    public http: Http) {
    //console.log('Hello HoteisProvider Provider');
  }

  listaHoteis(): Observable<any> { //Observable - Observa os dados estao chegando
    return this.http.get(this.urlBase)
      .map(this.dataHandler)
      .catch(this.errorHandler);
  }

  

  private dataHandler( res: Response ) {//dataHandler - Organiza os dados em formato Json em uma lista
    //console.log("aqui")
    let hot = res.json();
    return { lista: hot }
  }

  private errorHandler( error: Response | any ) {
    return Observable.throw("Erro ao acessar o servidor!!");
  }

}
