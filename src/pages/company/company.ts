import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketListPage } from '../rocket-list/rocket-list';
import { ICompany } from '../../app/Models/ICompany';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CompanyHistoryPage } from '../company-history/company-history';

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

  @ViewChild('slider') slider:Slides;
  page="0"

  selectedTab(ind){
    this.slider.slideTo(ind);
  }

  moveButton(event){
    this.page = event._snapIndex.toString();

  }

  sliderOptions = { pager: true, autoHeight: true } 

  companyHistories: ICompany[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
      this.spacexApi.getCompany({
        order: 'desc',
      }).subscribe(data => {
        this.company = data;
      })

      this.spacexApi.getCompanyHistory({
          order: 'desc',
        }).subscribe(data => {
        this.companyHistories = data;
        console.log(this.companyHistories);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  linkNav(page, id=null) {
    console.log("test"+page);
    switch (page) {
      case 'RocketPage':
        this.navCtrl.push(RocketListPage);
      break;

      case 'CompanyHistory':
        this.navCtrl.push(CompanyHistoryPage, {
          historyId: id
        });
      break;
    
      default:
        this.navCtrl.push(CompanyPage);
      break;
    }
  }

}
