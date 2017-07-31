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
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  activePage: any; 
  

  pages: Array<{title: string, component: any}>; 

  // rootPage:any = AlunoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
     { title: 'Notas', component: NotasPage }
      
    ]; 

    this.activePage = this.pages[0]; 

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }
  openPage(page){ 

    this.nav.setRoot(page.component); 
    this.activePage = page;
    
  }

  checkActive(page){ 
    return page == this.activePage;
  }
}

