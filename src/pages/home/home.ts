import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';
import { TodolistPage } from '../todolist/todolist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  check1: String;
  check2: String;

  constructor(public navCtrl: NavController, private storage: Storage ) {
    this.navCtrl = navCtrl;
  }


  onSignUp(){
    this.navCtrl.push(SignupPage);
  }
  
  
confirm(){
  this.storage.get('user').then((val) =>{
    if(this.check1==null){
      console.log("Enter details");
    }
    else if(val.username==this.check1 && val.password==this.check2){
      this.navCtrl.push(TodolistPage);
    }
    else if(val.username!=this.check1){
      console.log("Username invalid");
    }
    else{
      console.log("Password invalid");
    }
})
    this.storage.set('transfer',true);
}


}
