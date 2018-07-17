import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the LaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Launchpads',
  templateUrl: 'launchpad.html',
})
export class LaunchpadPage {
  public idLaunchpad;
  launchpad: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

    this.idLaunchpad = navParams.get("LaunchpadId");

    this.spacexApi.getSingleLaunchpads({}, this.idLaunchpad).subscribe(data => {
      this.launchpad = data;    
      console.log(data)    
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadPage');
  }

}
