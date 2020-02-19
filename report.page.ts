import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase'
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  title=""
  
  ngOnInit() {
    this.readReports()
  }
  ionViewWillEnter(){
    this.title="Report"
  }
  toShipment(){
    this.navCtrl.navigateForward('home')
  }
  toDispatch(){
    this.navCtrl.navigateForward('dispatch')
  }
  toAddReport(){
    this.navCtrl.navigateForward('addreport')
  }
  array = []
  reportList = []
  readReports() {
    firebase.database().ref('Report/').on('value', data => {
      this.array = []
      this.reportList = []
      let array = data.val()
      for (let key in array) {
        let obj = array[key]
        obj.key = key
        console.log(obj.key)
        this.reportList.push(obj)
        console.log(this.reportList)
      } 
    })
  }
}
