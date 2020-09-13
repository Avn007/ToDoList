import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the TodolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todolist',
  templateUrl: 'todolist.html',
})
export class TodolistPage implements OnInit{

  todos: any = [];
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, private storage: Storage) {
    
}

ngOnInit(){
    this.storage.get('todos').then((todos) =>{
        if(todos!=null){
            this.todos = todos;
        }
    })
}

addToDo(){
    let prompt = this.alert.create({
        title: 'Add ToDo',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.todos.push(data);
                    this.storage.set('todos', this.todos);
                }
            }
        ]
    });

    prompt.present();
}

delete(i){
    this.todos.splice(i,1);
    this.storage.set('todos', this.todos);
}

logout(){
    this.navCtrl.push(HomePage);
    this.storage.set('transfer', false);
}
}
