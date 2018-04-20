import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Building } from './building/building';
import { coreBuilding} from './building/coreBuilding';

@Injectable()
export class DataService {
  goldCount:number = 0;
  goldCount$ = new BehaviorSubject(0);
  history : Array<Building> = [];
  history$ = new BehaviorSubject([]);

  core$= new BehaviorSubject(new coreBuilding ());
  core = new coreBuilding();

  building = new Building();


  constructor() {
    // this.core$.caveHigh = 10;
    // this.core$.caveLow = 5;
   }

  // retrieveGold(){
  //   return this.goldCount;
  // }


  addGoldNew(building:String):number{
    if (building == 'Farm'){
      this.building.gold = Math.floor(Math.random() * (this.core.farmHigh - this.core.farmLow + 1)) + this.core.farmLow;
      this.building.place = 'Farm'}
    else if (building == 'Cave')
      {this.building.gold = Math.floor(Math.random() * (this.core.caveHigh - this.core.caveLow + 1)) + this.core.caveLow;
      this.building.place = 'Cave';}
    else if (building == 'Casino')
      {this.building.gold = Math.floor(Math.random() * (this.core.casinoHigh - this.core.casinoLow + 1)) + this.core.casinoLow;
        this.building.place = 'Casino';}
    else 
      {this.building.gold = Math.floor(Math.random() * (this.core.houseHigh - this.core.houseLow + 1)) + this.core.houseLow;
        this.building.place = 'House'}

    this.goldCount = this.goldCount + this.building.gold;
    console.log(`goldCount in Service is now ${this.goldCount} from ${this.building.place}`);
    this.goldCount$.next(this.goldCount);
    
    this.history.push(this.building);
    console.log(`service this.history is ${this.history}`);
    this.history$.next(this.history);
    this.building = new Building();
    return this.goldCount;
  }

  // addGold(building:Building):number{
  //   console.log(`in Service addGold`);

  //   if (building.place == 'farm'){building.gold = Math.floor(Math.random() * (this.core.farmHigh - this.core.farmLow + 1)) + this.core.farmLow;}
    
  //   this.goldCount = this.goldCount + building.gold;
  //   console.log(`goldCount in Service is now ${this.goldCount} from ${building.place}`);
  //   this.goldCount$.next(this.goldCount);
    
  //   this.history.push(building);
  //   console.log(`service this.history is ${this.history}`);
  //   this.history$.next(this.history);

  //   return this.goldCount;
  // }

  


}
