import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Building} from './building';
import {coreBuilding} from './coreBuilding';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Output() addGold = new EventEmitter<Building>();
  @Output() addBldg = new EventEmitter<string>();
  building = new Building();
  @Input() core:coreBuilding;

  constructor() { }

  ngOnInit() {
  }

  // sendGold(building:coreBuilding){
  //   if building.caveName 
  //   console.log(building.caveName)
  // }

  // sendBuilding(bldgName:string){
  //   this.addBldg.emit(bldgName);
  // }

  sendFarmGold(){
    //send farm gold amount to app level
    console.log('in the sendFarmGold method');
    //generate bulding object
    // this.building.place= 'farm';
    this.building.place= this.core.farmName;
    this.building.gold = Math.floor(Math.random() * (this.core.farmHigh - this.core.farmLow + 1)) + this.core.farmLow;
    //emit building
    this.addGold.emit(this.building);
    this.building = new Building();
  }

  sendCaveGold(){
    //send cave gold amount to app level
    console.log('in the sendCaveGold method');
     //generate bulding object
     this.building.place= 'Cave';
    //generate 5 - 10
    this.building.gold =Math.floor(Math.random() * (this.core.caveHigh - this.core.caveLow + 1)) + this.core.caveLow;
    //emit building
    this.addGold.emit(this.building);
    this.building = new Building();
  }

  sendCasinoGold(){
    //send casino gold amount to app level
    console.log('in the sendCasinoGold method');
     //generate bulding object
     this.building.place= 'Casino';
    //generate 5 - 10
    this.building.gold =Math.floor(Math.random() * (this.core.casinoHigh - this.core.casinoLow + 1)) + this.core.casinoLow;
    //emit building
    this.addGold.emit(this.building);
    this.building = new Building();
  }
  sendHouseGold(){
    //send cave gold amount to app level
    console.log('in the sendCaveGold method');
     //generate bulding object
     this.building.place= 'Cave';
    //generate 5 - 10
    this.building.gold =Math.floor(Math.random() * (this.core.houseHigh - this.core.houseLow + 1)) + this.core.houseLow;
    //emit building
    this.addGold.emit(this.building);
    this.building = new Building();
  }

}
