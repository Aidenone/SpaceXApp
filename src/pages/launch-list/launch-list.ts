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
  nextLaunch: ILaunch;
  upComingLaunches: ILaunch[];
  private countDownDate;
  private days;
  private hours;
  private minutes;
  private seconds;

  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
  
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.spacexApi.getAllLaunches(
      {
        order: 'desc',
      }
    ).subscribe(data => {
      this.allLaunches = data;
    })

    this.spacexApi.getPastLaunches(
      {
        order: 'desc',
      }
    ).subscribe(data => {
      this.pastLaunches = data;
    })

    this.spacexApi.getNextLaunch(
     
    ).subscribe(data => {
      console.log(data);
      this.nextLaunch = data;
      this.countDownLaunch();
    })
    

    this.spacexApi.getUpComingLaunches(
      {
        order: 'desc',
      }
    ).subscribe(data => {
      this.upComingLaunches = data;
    })
  }

  countDownLaunch() {
    this.countDownDate = this.nextLaunch.launch_date_unix * 1000;

    let interval = setInterval( handle => {
      // console.log(this.seconds);
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(interval);
        // document.getElementById("demo").innerHTML = "EXPIRED"
      }

    }, 1000)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

/*  navigate(flightNumber) {
    this.navCtrl.push(LaunchPage, {
      flightNumber: flightNumber
    })
  } */

}
