import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data.service';

import { Shop } from '../shared/shop';

@Component({
  selector: 'app-biz',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.css']
})
export class BizComponent implements OnInit {
  @Input() biz: Shop;
  
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
