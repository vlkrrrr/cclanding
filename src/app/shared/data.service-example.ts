import { Injectable } from '@angular/core';
import { Shop } from './shop';
//
// remove -example from filename
//
class BaseData {
  welcome = 'CADDELN ◆ CAFFÉ';
  impTel =  '23423';
  impEmail = 'bla@bla.de';
}




@Injectable({
  providedIn: 'root'
})
export class DataService {
  public shops: Shop[] = [
    {id: 1, name: 'Gartenbau', type:'Blumenhandel', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'local_florist', showlogo: false, logopath:''},
    {id: 2, name: 'Hairf', type:'Friseur', tel: '234', fax: '674456' , email:'s234@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'shopping_basket', showlogo: false, logopath:''},
    {id: 3, name: 'ApoHirsc', type:'Apotheke', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf' , symbol:'hearing', showlogo: false, logopath:''},
    {id: 4, name: 'Fashion', type:'Mode', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'local_pharmacy', showlogo: false, logopath:''},
    {id: 5, name: 'Gartenbau', type:'Blumenhandel', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'local_florist', showlogo: false, logopath:''},
    {id: 6, name: 'Hairf', type:'Friseur', tel: '234', fax: '674456' , email:'s234@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'shopping_basket', showlogo: false, logopath:''},
    {id: 7, name: 'ApoHirsc', type:'Apotheke', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf' , symbol:'hearing', showlogo: false, logopath:''},
    {id: 8, name: 'Fashion', type:'Mode', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'local_pharmacy', showlogo: false, logopath:''}
  ]
  public baseData = new BaseData();

  constructor() { }
}

