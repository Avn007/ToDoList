import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  todos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe(res=>{
      this.todos = res.json();
      console.log(this.todos);
    })

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewPage');
  // }

}
