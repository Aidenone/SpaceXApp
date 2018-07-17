import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunchpad } from '../../app/Models/ILaunchpad';
import { LaunchpadPage } from '../../pages/launchpads/launchpad';

/**
 * Generated class for the LauncpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {
  launchpads : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
  
    this.spacexApi.getAllLaunchpads(
      {
        order: 'desc',
        
      }
    ).subscribe(data => {
      this.launchpads = data;
    })
  }


  navigate(idLaunchPad) {
    this.navCtrl.push(LaunchpadPage, {
      idLaunchPad: idLaunchPad
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }

}
