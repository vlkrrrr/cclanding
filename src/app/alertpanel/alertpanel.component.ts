import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-alertpanel',
  templateUrl: './alertpanel.component.html',
  styleUrls: ['./alertpanel.component.css']
})
export class AlertpanelComponent implements OnInit {

  constructor(public dataService: DataService){}
   

  ngOnInit() {
  }

}
