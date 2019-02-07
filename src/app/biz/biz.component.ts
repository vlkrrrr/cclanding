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
  
  // public biz: Shop = {id: 'a', name: 'Gartenbau', type:'Blumenhandel', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'http://www.google.de', openhours:'Mo - Fr:&nbsp;&nbsp;&nbsp;09:00-13:00, 14:00-18:00<br>Sa:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00-16:00', note:'sdfsdf'};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
