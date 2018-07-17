import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunch } from '../../app/Models/ILaunch';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {

  @ViewChild('slider') slider:Slides;
  page="0"

  selectedTab(ind){
    this.slider.slideTo(ind);
  }

  moveButton(event){
    this.page = event._snapIndex.toString();

  }

  sliderOptions = { pager: true, autoHeight: true } 

  allLaunches: ILaunch[];
  pastLaunches: ILaunch[];
  upComingLaunches: ILaunch[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
  
    this.spacexApi.getAllLaunches(
      {
        order: 'asc',
      }
    ).subscribe(data => {
      this.allLaunches = data;
    })

    this.spacexApi.getPastLaunches(
      {
        order: 'asc',
      }
    ).subscribe(data => {
      this.pastLaunches = data;
    })

    this.spacexApi.getUpComingLaunches(
      {
        order: 'asc',
      }
    ).subscribe(data => {
      this.upComingLaunches = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
