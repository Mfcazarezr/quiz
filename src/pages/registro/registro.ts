import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  inicio(){
    console.log(this.usuario.email + " " + this.usuario.pass);
    if(this.usuario.email!=null&&this.usuario.pass!=null){
      this.navCtrl.push(this.home,this.usuario);
    }else{
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Te faltan parametros',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
