import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from './shop';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

// remove -example from filename




@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'assets/data/production.json'
  ccdata: Ccdata;

  baseData: BaseData = {
    welcome: 'Initial Title',
    address: '',
    googlemaps: '',
    zufahrt1: '',
    zufahrt2: ''
  }
  shops: Shop[] = [{id: 1, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 2, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 3, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 4, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 5, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 6, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 7, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 8, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''},
  {id: 9, name: '', htmlname: '', type:'', tel: '', telhtml: '', fax: '' , cardphoto: '', cardphototitle: '', email: '', website: '', openhours:[], note:'', symbol:'', showlogo: false, logopath:''}
];
  
  getCenterData() {
    return this.http.get<Ccdata>(this.dataUrl);
  }

constructor(private http: HttpClient) {
  this.getCenterData()
    .subscribe((data: Ccdata) => { this.ccdata = {...data},
    this.shops = this.ccdata.shops;
    this.baseData = this.ccdata.baseData;
  })
 }
}

interface Ccdata {
  baseData: BaseData;
  shops: Shop[];
}

interface BaseData {
  welcome: string;
  address: string,
  googlemaps: string,
  zufahrt1: string,
  zufahrt2: string
}
