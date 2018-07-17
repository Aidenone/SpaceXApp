import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketListPage } from '../rocket-list/rocket-list';
import { RocketPage } from '../rocket/rocket';

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

    this.idLaunchpad = navParams.get("idLaunchPad");
    console.log("pad id :"+this.idLaunchpad);

    this.spacexApi.getSingleLaunchpads({}, this.idLaunchpad).subscribe(data => {
      this.launchpad = data;
    })
    
  }

  linkNav(page, name=null) {
    switch (page) {
      case 'RocketPage':
        console.log(name.toLowerCase());
        this.navCtrl.push(RocketPage, {
          idRocket: name.toLowerCase()
        });
      break;
    
      default:
        this.navCtrl.push(RocketListPage);
      break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadPage');
  }

}
