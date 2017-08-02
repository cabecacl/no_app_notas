import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AlunoPage } from '../pages/aluno/aluno';
import { NotasPage } from '../pages/notas/notas'; 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  notasPage = NotasPage;
  alunoPage = AlunoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });   

    
  }

  openPage(page){ 
    this.rootPage = page;
  }

  sair(){
    
  }

}

