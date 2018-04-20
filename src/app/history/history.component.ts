import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../building/building';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() history:Array<Building>
  constructor() { }


  ngOnInit() {
  }

}
