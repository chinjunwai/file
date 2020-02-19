import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.page.html',
  styleUrls: ['./addbranch.page.scss'],
})
export class AddbranchPage implements OnInit {

  constructor(public nav: NavController) { }
  branch = { bID: "", name: "" }
  ngOnInit() {
  }
  existedData = []
  readExistingData() {
    let exist = false
    firebase.database().ref('Branch/').once('value', data => {
      data.forEach(element => {
        if(element.val().bID == this.branch.bID)
        {
          alert("Branch ID already exist")
          exist = true
        }
      })
    }).then(()=>{
      if(exist == false){
        firebase.database().ref("Branch/").push(this.branch).then(() => {
          this.branch.bID = null
          this.branch.name = null
          this.nav.navigateBack("branch")
        })
      }
      this.branch.bID = ""
    })

    

  }  

  create(){

    if (this.branch.bID == "" || this.branch.name == "") {
      alert("Please fill in the blank !!")
    }
    else if (this.branch.bID !== "") {
      this.readExistingData()
    }

  }
  backToBranch() {
    this.nav.navigateBack('branch')
  }
}
