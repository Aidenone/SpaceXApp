import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CapsulePage } from '../capsule/capsule';

/**
 * Generated class for the CapsulesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules-list',
  templateUrl: 'capsules-list.html',
})
export class CapsulesListPage {
  capsules: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

      this.spacexApi.getAllCapsules({}).subscribe(data => {
        this.capsules = data;        
      })
  }  

  navigate(capsuleId) {
    this.navCtrl.push(CapsulePage, {
      capsuleId: capsuleId
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulesListPage');
  }

}
