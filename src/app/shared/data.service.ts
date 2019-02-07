import { Injectable } from '@angular/core';
import { Shop } from './shop';


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
    {id: '1', name: 'Gartenbau', type:'Blumenhandel', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'local_florist'},
    {id: '2', name: 'Hairf', type:'Friseur', tel: '234', fax: '674456' , email:'s234@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'shopping_basket'},
    {id: '3', name: 'ApoHirsc', type:'Apotheke', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf' , symbol:'hearing'},
    {id: '4', name: 'Fashion', type:'Mode', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf', symbol:'local_pharmacy'}
  ]
  public baseData = new BaseData();

  constructor() { }
}

