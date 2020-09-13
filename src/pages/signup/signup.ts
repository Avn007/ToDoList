import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  authForm: FormGroup;
  in1: any;
  in2: any;
  in3: any;
  in4: any;
  in5: any;
  //passpattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public storage: Storage) {
    this.navCtrl = navCtrl;

    function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value !== undefined && (isNaN(control.value) || control.value < 10 || control.value > 90)) {
          return { 'age validator': true };
      }
      
      return null;
  }


  //   function passValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //     if (control.value !== 'A-Za-z0-9?=.[!@#\$%\^&]') {
  //       return { 'password validator': true };
  //     }

  //     return null;
  // }

    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      age: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), ageRangeValidator ] )],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])], 
      number: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.min(6000000000),  Validators.minLength(10)])]

  });
}

saveData(){
  let userData={
    'username': this.in1,
    'password': this.in2,
    'age': this.in3,
    'email': this.in4,
    'number':this.in5
  }
  this.storage.set("user",userData);
  
  this.navCtrl.push(HomePage);
}
  
}

// A-Za-z0-9?=.[!@#\$%\^&]
