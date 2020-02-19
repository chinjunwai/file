import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase'
import { NavController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-addshipment',
  templateUrl: './addshipment.page.html',
  styleUrls: ['./addshipment.page.scss'],
})
export class AddshipmentPage implements OnInit {
  @ViewChild('uploadEl', { static: false }) uploadElRef: ElementRef;
  constructor(public nav: NavController, private http: HttpClient,
    private papa: Papa,
    private plt: Platform,
    private file: File) { }
  ship = { shipID: "", OrderDate: "", Received: "", From: "", inventory :{} };
  ngOnInit() {
  }
  close() {
    this.nav.navigateBack("home")
  }
  readExistingData() {
    let existed = false
    firebase.database().ref('Shipment/').once('value', data => {

      data.forEach(element => {

        if (element.val().shipID == this.ship.shipID) {
          console.log('hello')
          alert("Shipment ID already exist")
          existed = true;
        }

      })
    }).then(() => {

      if (existed == false) {
        firebase.database().ref("Shipment/").push(this.ship).then(() => {
          this.ship.shipID = null
          this.ship.OrderDate = null
          this.ship.Received = null
          this.ship.From = null
        })
      }
      this.ship.shipID = ""
    })
  }

  upload() {

    if (this.ship.shipID == "" || this.ship.OrderDate == "" || this.ship.Received == "" || this.ship.From == "" ) {
      alert("Please fill in the blank !!")
    }
    else if (this.ship.shipID !== null) {
      console.log(this.ship.shipID)
      this.readExistingData()

    }


  }

  table=[];
  holder_name = {};
  changeListener(res: any): void {
    let csvData = res.target.files[0] || res.srcElement;
    this.uploadElRef.nativeElement.value = ''
    this.papa.parse(csvData, {
      complete: parsedData => {
        // console.log(parsedData.data.splice(0, 1)[0])
        console.log(parsedData.data);
        this.table=parsedData.data;
         this.holder_name = {};

       for( let i = 3; i <  parsedData.data[0].length - 3 ; i++ ){
         this.holder_name[ parsedData.data[0][i] ] = [];
       }

       for( let i = 1; i <  parsedData.data.length ; i++ ){

        for( let j = 3; j <  parsedData.data[i].length - 3 ; j++ ){

          this.holder_name[parsedData.data[0][j]].push({
            ref:parsedData.data[i][1] || "",
            desc:parsedData.data[i][2] || "",
            qty:parsedData.data[i][j] || 0,
          })

        }

       }
       this.ship.inventory=(this.holder_name)
       console.log(this.ship)
       console.log(this.holder_name);
       

        let holder = [];
        for (let x = 0; x < (parsedData.data).length - 1; x++) {
          // console.log(holder);
        }
      }
    });
  }
}
