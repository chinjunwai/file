import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase'
@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {
  title = ""
  constructor(public navCtrl: NavController) { }
  arr = []
  branchlist = []
  ngOnInit() {

    this.readBranch()
  }
  toShipment() {
    this.navCtrl.navigateForward("home")
  }
  ionViewWillEnter() {
    this.title = 'Branch'
  }
  readBranch() {
    firebase.database().ref('Branch/').on('value', data => {
      this.arr = []
      this.branchlist = []
      this.arr = data.val()
      for (let key in this.arr) {
        let obj = this.arr[key]
        this.branchlist.push(obj)
      }
      console.log(this.branchlist)
    })
  }
  toAddBranch(){
    this.navCtrl.navigateForward('addbranch')
  }
  keyword = ""
 
  sorting(array){

    let holder = [];

    array.forEach(element => {
      if((element.bID).includes(this.keyword)){
        holder.push(element);
      }

    });

    return holder;
  }
}
