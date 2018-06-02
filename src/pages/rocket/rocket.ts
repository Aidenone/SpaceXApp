import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
/**
 * Generated class for the RocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket',
  templateUrl: 'rocket.html',
})
export class RocketPage {
  public idRocket;
  rocket: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

    this.idRocket = navParams.get("idRocket");

    this.spacexApi.getSingleRocket({}, this.idRocket).subscribe(data => {
      this.rocket = data;        
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketPage');
  }

}
