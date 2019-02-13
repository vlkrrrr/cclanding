import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  activeShop = 0;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
  }

 mouseEnter(shop: number) {
   this.activeShop = shop;
 }
 mouseLeave(shop: number) {
  this.activeShop = 0;
 }


}
