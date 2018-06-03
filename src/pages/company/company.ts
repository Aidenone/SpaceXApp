import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchListPage } from '../launch-list/launch-list';

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  company: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.spacexApi.getCompany({
        order: 'desc',
      }).subscribe(data => {
        this.company = data;
      })
      console.log(this.company);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  linkNav(event, page) {
    switch (page) {
      case 'LaunchListPage':
        this.navCtrl.push(LaunchListPage);
      break;
    
      default:
        this.navCtrl.push(CompanyPage);
      break;
    }
  }

}
