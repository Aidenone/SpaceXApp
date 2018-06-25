import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') slider:Slides;
  page="0"

  constructor(public navCtrl: NavController) {

  }

  selectedTab(ind){
    this.slider.slideTo(ind);
  }

  moveButton(event){
    this.page = event._snapIndex.toString();

  }

}
