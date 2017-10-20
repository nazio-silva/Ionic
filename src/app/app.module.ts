import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HoteisProvider } from '../providers/hoteis/hoteis';
import { HttpModule } from '@angular/http';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { AvaliacaoPageModule } from '../pages/avaliacao/avaliacao.module';
//import { HospedagemProvider } from '../providers/hospedagem/hospedagem';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DetalhesPageModule,
    AvaliacaoPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HoteisProvider,
    //HospedagemProvider
  ]
})
export class AppModule {}
