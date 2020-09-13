import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { TodolistPage } from '../pages/todolist/todolist';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();

      this.storage.get('transfer').then((transfer) =>{
        if(transfer == true){
          this.rootPage = TodolistPage;
        }
        else{
          this.rootPage = HomePage;
        }
      })

      splashScreen.hide();
    });
  }
}

