import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { IRocket } from '../../app/Models/IRocket';
import { RocketPage } from '../../pages/rocket/rocket';


/**
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {

  rockets: IRocket[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
  
    this.spacexApi.getAllRockets(
      {
        order: 'desc',
        
      }
    ).subscribe(data => {
      this.rockets = data;
    })
  }


  navigate(idRocket) {
    this.navCtrl.push(RocketPage, {
      idRocket: idRocket
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }

}
