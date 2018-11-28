import { Component } from '@angular/core';
import { NavController, AlertController, UrlSerializer } from 'ionic-angular';
import {Storage} from '@ionic/storage'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Usuario="";
  password="";
  data=[];
  datos="";
 

  constructor(public navCtrl: NavController, public alertCtrl:AlertController,public storage:Storage) {
    this.storage.keys()
    .then(keys=>{
      if(keys.some(key=> key == 'datos')){
        this.storage.get('datos')
        .then(data=> {
          this.datos=JSON.parse(data);
        })
      }
     })

  }
  add()
  {
    if (this.password.length >8)
    {
      this.navCtrl.push({
        Usuario:this.Usuario,
        password:this.password
      });
      this.Usuario="";
      this.password="";
      this.storage.set('datos', JSON.stringify(this.data));//guarda
      console.log('datos');
    console alert =this.alertCtrl.create({
      Title: 'welcome',
    subTitle: 'su registro ha sido un exito',
    bottons: ['ok]']
  });
  alert.present();
    
    }
  }
  else
  {
    console.log('la contraseña es menor a 8 caracteres, intente de nuevo');
    console alert =this.alertCtrl.create({
      Title: 'no es valido',
    subTitle: 'su contraseña e menor a 8 caracteres',
    bottons: ['ok]']
  });
  alert.present();


  }
 in()
  {
   let index =this.usuario.findIndex(usuario =>
    usuario.mail==this.mail &&
    usuario.pass== this.pass);
  }
}
