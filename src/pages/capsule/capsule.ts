import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the CapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule',
  templateUrl: 'capsule.html',
})
export class CapsulePage {
  public capsuleId;
  capsule: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

    this.capsuleId = navParams.get("capsuleId");

    this.spacexApi.getCapsuleByName({}, this.capsuleId).subscribe(data => {
      this.capsule = data;        
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulePage');
  }

}
