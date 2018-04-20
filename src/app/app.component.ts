import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Building } from './building/building';
import { coreBuilding } from './building/coreBuilding';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'NinjaGold';
  myGoldCount:number;
  myHistory:Array<Building>;
  goldEvent:number;

  //building values to pass down to the building component
  myCore:coreBuilding;

  constructor(private _dataService:DataService) { }

  dataFromChild_old(incomingGoldEvent:Building){
    console.log(`from the emit ${incomingGoldEvent}`);
    this.goldEvent = incomingGoldEvent.gold;
    this._dataService.addGold(incomingGoldEvent);
  }

  dataFromChild(incomingGoldEvent:Building){
    console.log(`from the emit ${incomingGoldEvent}`);
    // this.goldEvent = incomingGoldEvent.gold;
    this._dataService.addGold(incomingGoldEvent);
  }

  // bldgNameFromChild(incomingBuildingEvent:string){
  //   this._dataService.addBldg(incomingBuildingEvent);
  // }

  ngOnInit() {
  //subscribe to the goldCount
   this._dataService.goldCount$.subscribe(val => {
     this.myGoldCount = val;
   })
   this._dataService.history$.subscribe(val => {
    this.myHistory = val;
  })
  this._dataService.core$.subscribe(val => {
    this.myCore = val;
    // console.log(this.myCore);
  })

  }

}
